import { Component, Injectable } from '@angular/core';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';

export class TreeItem {
  children?: TreeItem[];
  name: string;
}

export class TreeItemFlat {
  name: string;
  level: number;
  expandable: boolean;
}


const TREE_DATA = {
    'Dyfa:AAP->HRG 4Z': null,
    'Dyfa:AAP->SCD 4Z': null,
    'Dyfa:ADH->DHB 2Z': null,
    'Dyfa:ADH->GRM 2Z': null,
    'Dyfa:ADH->SCD 2Z': null,
    'Dyfa:AHH->SCD 4Z': null,
    'Dyfa:AHK->ASB 4Z': null,
    'Dyfa:AHK->BBF 4Z': null,
    'Dyfa:AHK->BMP 4Z': null,
    'Dyfa:AHK->SCD 4Z': null,
    'Dyfa:ALE->DHB 4Z': null,
    'Dyfa:ALE->OBM Bus 4Z': null,
    'Dyfa:ALE->VNA Bus 4Z': null,
    'Dyfa:AMN AB1': null,
    'Dyfa:AMN AB2': null,
    'Dyfa:AMN AB4': null,
    'Dyfa:AMN AP': null,
    'Dyfa:AMN B1a': null,
    'Dyfa:AMN B1c': null,
    'Dyfa:AMN B1e': null,
    'Dyfa:AMN B2a': null,
    'Dyfa:AMN B2c': null,
    'Dyfa:AMN B2e': null,
    'Dyfa:AMN B3a': null,
    'Dyfa:AMN B3c': null,
    'Dyfa:AMN B3e': null,
    'Dyfa:AMN B4a': null,

}


@Injectable()
export class DyFaTreeDatabase {
  dataChange: BehaviorSubject<TreeItem[]> = new BehaviorSubject<TreeItem[]>([]);
  parentNodeMap = new Map<TreeItemFlat, TreeItem>();

  get data(): TreeItem[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

   /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
    buildFileTree(value: any, level: number) {
      let data: any[] = [];
      for (let k in value) {
        let v = value[k];
        let node = new TreeItem();
        node.name = `${k}`;
        if (v === null || v === undefined) {
          // no action
        } else if (typeof v === 'object') {
          node.children = this.buildFileTree(v, level + 1);
        } else {
          node.name = v;
        }
        data.push(node);
      }
      return data;
  }

  /**add a root-node to treeitem */
  addRoot(name: string){
    const dataNode = new TreeItem[name];
  }

    /** Add an item to treeitem */
  insertItem(parent: TreeItem, name: string) {
    const child = <TreeItem>{ name: name };
    if (parent.children) { // parent already has children
      parent.children.push(child);
      this.dataChange.next(this.data);
    }
    else { // if parent is a leaf node
      parent.children = [];
      parent.children.push(child);
      this.dataChange.next(this.data);
    }
  }

  findParent(id: number, node: any): any {

    console.log("id " + id + " node" + node.id);
    if (node != undefined && node.id === id) {
      return node;
    } else {
      console.log("ELSE " + JSON.stringify(node.children));
      for (let element in node.children) {
        console.log("Recursive " + JSON.stringify(node.children[element].children));
        if (node.children[element].children != undefined && node.children[element].children.length > 0) {
          return this.findParent(id, node.children[element]);
        } else {
          continue;
        }


      }

    }
  }

  deleteItem(parent: TreeItem, name: string){
    if (parent.children) {
      parent.children = parent.children.filter(c => c.name !== name);
      this.dataChange.next(this.data);
    }

  }

  updateItem(node: TreeItem, name: string) {
    node.name = name;
    this.dataChange.next(this.data);
  }
}