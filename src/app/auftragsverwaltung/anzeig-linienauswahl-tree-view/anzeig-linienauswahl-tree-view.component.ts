import { Component, ElementRef } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { TreeItem, TreeItemFlat,DyFaTreeDatabase } from './treedata';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource } from '@angular/material/tree';
import { of as ofObservable, Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { cloneDeep } from "lodash";


export interface AuftTemplate {
  name: string;
}

const ELEMENT_DATA: AuftTemplate[] = [
  {name:'AMN'},
  {name:'SNE'},
  {name:'FGP'},
  {name:'SKS'},
  {name:'REP'},
  {name:'TEO'},
  {name:'GOP'},
  {name:'KEN'},
  {name:'KVS'},
  {name:'NOS'},
  {name:'HHO'},
  {name:'STS'},
  {name:'OSS'},
  {name:'DHB'},
  {name:'OBM'},
  {name:'ELS'},
  {name:'OBB'},
  {name:'KSN'},
  {name:'TON'},
  {name:'LUP'},
  {name:'BAP'},
  {name:'BLP'},
];


@Component({
  selector: 'app-anzeig-linienauswahl-tree-view',
  templateUrl: './anzeig-linienauswahl-tree-view.component.html',
  styleUrls: ['./anzeig-linienauswahl-tree-view.component.scss'],
  providers: [DyFaTreeDatabase]
})

export class AnzeigLinienauswahlTreeViewComponent{ 
  checkdata = ELEMENT_DATA;
  treeData: any[];
  treeControl: FlatTreeControl<TreeItemFlat>;
  dataSource : MatTreeFlatDataSource<TreeItem, TreeItemFlat>;
  itemSelection = new SelectionModel<TreeItemFlat>(true);
  itemSelection1 = new SelectionModel<TreeItemFlat>(true);
  itemSelection2 = new SelectionModel<TreeItemFlat>(true);
  showAllNodes: boolean;
  selectedItems: number;
  itemCount: number;
  isEditActive: boolean = false;
  isClicked: boolean = false;
  editItem: any = null;
  editorFocused: boolean = false;
  hoverItem: any = null;
  originalText: string = '';
  name: string;
  activeNode;
  hiddenSondertext: boolean = true;
  showSondertext: boolean = true;
  copy: any;
  buttonColor: 'primary';
  animal: boolean = false;
  flatNodeMap: Map<TreeItemFlat, TreeItem> = new Map<TreeItemFlat, TreeItem>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap: Map<TreeItem, TreeItemFlat> = new Map<TreeItem, TreeItemFlat>();
;
  /** A selected parent node to be inserted */
  selectedParent: TreeItemFlat | null = null;

  /** The new item's name */
  newItemName: string = '';
  nestedDataSource: MatTreeNestedDataSource<TreeItemFlat>;

  treeFlattener: MatTreeFlattener<TreeItem, TreeItemFlat>;


  /** The selection for checklist */

  constructor(private database: DyFaTreeDatabase, 
    public dialog: MatDialog, 
    private elementRef: ElementRef,
    ) {
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
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.itemSelection.isSelected(child);
    });
    return descAllSelected;
  }
  
  /** Whether part of the descendants are selected and not all are selected */
  descendantsPartiallySelected(node: TreeItemFlat): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.itemSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /* Toggle selection */
  itemSelectionToggle(node: TreeItemFlat,column:number) {
    if(column ==1){
    this.itemSelection1.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.itemSelection1.isSelected(node) ?
      this.itemSelection1.select(...descendants) : this.itemSelection1.deselect(...descendants);

    //
    descendants.forEach(child => this.itemSelection1.isSelected(child));
    this.checkAllParentsSelection(node);}
    else if(column ==2){
      this.itemSelection2.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.itemSelection2.isSelected(node) ?
      this.itemSelection2.select(...descendants) : this.itemSelection2.deselect(...descendants);

    //
    descendants.forEach(child => this.itemSelection2.isSelected(child));
    this.checkAllParentsSelection(node);
    }
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  LeafItemSelectionToggle(node: TreeItemFlat): void {
    this.itemSelection.toggle(node);
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
    const nodeSelected = this.itemSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.itemSelection.isSelected(child);
    });
    if (nodeSelected && !descAllSelected) {
      this.itemSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.itemSelection.select(node);
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

  /**remove a node */
  removeItem(node: TreeItemFlat) {
    console.log(node)
    // Get the parent node of the selected child node
    const parentNode = this.getParentNode(node);

    // Map from flat node to nested node.
    const parentFlat = this.flatNodeMap.get(parentNode);

    this.database.deleteItem(parentFlat!, node.name);
    this.treeControl.expand(node);
  } 

  /**copy a node */
  copyItem(node: TreeItemFlat) {
    this.copy = cloneDeep(node)
    console.log(this.copy)
  }

  /**cut a node */
  cutItem(node: TreeItemFlat) {
    this.copy = cloneDeep(node)
    this.removeItem(node);
  }

  /**paste a node */
  pasteItem(node: TreeItemFlat) {
    const parentNode = this.flatNodeMap.get(node);
    this.database.insertItem(parentNode, this.copy.name); 
  }

  /** Save the node to database */
  saveNode(node: TreeItemFlat, itemValue: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateItem(nestedNode!, itemValue);
  }

  /**add root node */
  addFolder(name:string){
     this.database.addRoot(name);
  }

  changeItem(node: TreeItemFlat){

  }
}
