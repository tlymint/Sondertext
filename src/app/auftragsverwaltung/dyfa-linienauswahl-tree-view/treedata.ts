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
  '008': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null

  },
  '009': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null
  },
  '070': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null
  },
  '071': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null
  },
  '072': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null,
  },
  '073': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null,
  },
  '074': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null,
  },
  '075': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null,
  },
  '076': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null,
  },
  '077': {
    'AMN': null,
    'SNE': null,
    'FGP': null,
    'SKS': null,
    'REP': null,
    'TEO': null,
    'GOP': null,
    'KEN': null,
    'KVS': null,
    'NOS': null,
    'HHO': null,
    'STS': null,
    'OSS': null,
    'DHB': null,
    'OBM': null,
    'ELS': null,
    'OBB': null,
    'KSN': null,
    'TON': null,
    'LUP': null,
    'BAP': null,
    'BLP': null,
  }
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