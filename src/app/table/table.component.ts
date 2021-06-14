import { Component, ViewChild,Input} from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatNestedTreeNode } from '@angular/material/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { TreeItem, TREE_DATA } from './table-data';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
 @ViewChild('addinput',{static: false}) addinput:any;
 @Input() toolbar: ToolbarComponent;

  treeData: any[];
  treeControl = new NestedTreeControl<TreeItem>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeItem>();
  itemSelection = new SelectionModel<TreeItem>(true);
  showAllNodes: boolean;
  name: string;

  constructor() {
    this.dataSource.data = TREE_DATA;
    this.treeData = TREE_DATA;
    this.showAllNodes = true;
  }

  hasChild = (_: number, node: TreeItem) => !!node.children && node.children.length > 0;

  /* Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: TreeItem): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.itemSelection.isSelected(child)
    );
    return descAllSelected;
  }

  /** Whether part of the descendants are selected and not all are selected */
  descendantsPartiallySelectedAndNotAll(node: TreeItem): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.itemSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /* Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TreeItem): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.itemSelection.isSelected(child));
    return result;
  }

  /* Toggle selection */
  itemSelectionToggle(node: TreeItem) {
    this.itemSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.itemSelection.isSelected(node) ?
      this.itemSelection.select(...descendants) : this.itemSelection.deselect(...descendants);

    //
    this.markSelectedNodes();
    this.checkSelected(node);
  }

  checkSelected(node){
    if(this.itemSelection.isSelected(node)){  
      this.addinput.addControlsInFormArray(node.value);
    }
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
      } else {
        node.selected = false;
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

  quit(){
    this.toolbar.hideDialog();
  }
}

