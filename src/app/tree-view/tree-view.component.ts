import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { TreeItem, TreeItemFlat,ChecklistDatabase } from './tree-data';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';
import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  providers: [ChecklistDatabase]
})

export class TreeViewComponent {
  treeData: any[];
  treeControl: FlatTreeControl<TreeItemFlat>;
  dataSource : MatTreeFlatDataSource<TreeItem, TreeItemFlat>;
  itemSelection = new SelectionModel<TreeItem>(true);
  showAllNodes: boolean;
  selectedItems: number;
  name: string;
  flatNodeMap: Map<TreeItemFlat, TreeItem> = new Map<TreeItemFlat, TreeItem>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap: Map<TreeItem, TreeItemFlat> = new Map<TreeItem, TreeItemFlat>();

  /** A selected parent node to be inserted */
  selectedParent: TreeItemFlat | null = null;

  /** The new item's name */
  newItemName: string = '';

  treeFlattener: MatTreeFlattener<TreeItem, TreeItemFlat>;


  /** The selection for checklist */
  checklistSelection = new SelectionModel<TreeItemFlat>(true /* multiple */);

  constructor(private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<TreeItemFlat>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  getLevel = (node: TreeItemFlat) => { return node.level; };

  isExpandable = (node: TreeItemFlat) => { return node.expandable; };

  getChildren = (node: TreeItem): Observable<TreeItem[]> => {
    return ofObservable(node.children);
  }

  hasChild = (_: number, _nodeData: TreeItemFlat) => { return _nodeData.expandable; };

  hasNoContent = (_: number, _nodeData: TreeItemFlat) => { return _nodeData.name === ''; };

  transformer = (node: TreeItem, level: number) => {
    let flatNode = this.nestedNodeMap.has(node) && this.nestedNodeMap.get(node)!.name === node.name
      ? this.nestedNodeMap.get(node)!
      : new TreeItemFlat();
    flatNode.name = node.name;
    flatNode.level = level;
    flatNode.expandable = !!node.children;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  /* Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TreeItemFlat): boolean {
    const descendants = this.treeControl.getDescendants(node);
    return descendants.every(child => this.checklistSelection.isSelected(child));
  }

  /** Whether part of the descendants are selected and not all are selected */
  descendantsPartiallySelectedAndNotAll(node: TreeItemFlat): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.itemSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /* Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TreeItemFlat): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.itemSelection.isSelected(child));
    return result;
  }

  /* Toggle selection */
  itemSelectionToggle(node: TreeItemFlat) {
    this.itemSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.itemSelection.isSelected(node) ?
      this.itemSelection.select(...descendants) : this.itemSelection.deselect(...descendants);

    //
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TreeItemFlat): void {
    let parent: TreeItemFlat | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  checkRootNodeSelection(node: TreeItemFlat): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  getParentNode(node: TreeItemFlat): TreeItemFlat | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  /* toggle for showing selected nodes or showing all nodes */
  toggleSelectedNodes() {
    this.showAllNodes = !this.showAllNodes;
    this.markSelectedNodes();
  }

  /* Mark nodes that are in itemsSelection as selected */
  markSelectedNodes() {
    for (const node of this.treeData) {
      if (this.descendantsPartiallySelected(node)) {
        node.selected = true;
        this.checkDescendants(node);
      } else {
        node.selected = false;
      }
    }
  }

  /* Recursively mark children nodes that are in itemsSelection as selected */
  checkDescendants(treeItem) {
    if (treeItem.children) {
      for (const node of treeItem.children) {
        if (this.descendantsPartiallySelected(node)) {
          node.selected = true;
          this.checkDescendants(node);
        } else {
          if (this.itemSelection.isSelected(node)) {
            node.selected = true;
          } else {
            node.selected = false;
          }
        }
      }
    }
  }

  /* search nodes by node name */
  filterNodes(text) {
    const treeData = this.treeData.filter(node => this.findNode(node, text));
    this.dataSource.data = treeData;
  }

  /* recursively checks if any node is present with the searched tname */
  findNode(node, text) {
    if (node.name.toLowerCase().includes(text.toLowerCase())) {
      return true;
    }
    let returnVal: boolean;
    if (node.children) {
      for (const n of node.children) {
        returnVal = this.findNode(n, text);
        if (returnVal) {
          return true;
        }
      }
    }
    return false;
  }

   /** Select the category so we can insert the new item. */
   addNewItem(node: TreeItemFlat) {
    const parentNode = this.flatNodeMap.get(node);
    // 
    let isParentHasChildren: boolean = false;
    if (parentNode.children)
      isParentHasChildren = true;
    //
    this.database.insertItem(parentNode!, '');
    // expand the subtree only if the parent has children (parent is not a leaf node)
    if (isParentHasChildren)
      this.treeControl.expand(node);
  }

  /** Save the node to database */
  saveNode(node: TreeItemFlat, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateItem(nestedNode!, itemValue);
  }
}

