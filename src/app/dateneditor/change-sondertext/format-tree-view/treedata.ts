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
  'Gruppe 002 SOT AMN': {
    'Qualitätsreporting': null,
    'Statistuik': {
        'DyFa-BR': null,
        'DyFa-ZR':null,
    },
    'Systemmeldungen 18.06.21': {

    }
  },
  'Gruppe 004 SOT 4Z': {
    '1': '10Z:InfoSteele + 1Z SOT (10)',
    '2': '11Z XL Ex-DyFa: ZAK + 1Z SOT (32)',
    '3': '11Z: PAS + 1Z: SOT',
    '4': null,
    '5': null,
    '6': null,
    '7': null,
    '8': null,
    '9': null,
    '10': null,
    '11': null,
    '12': null,
    '13': null,

  },
'Gruppe 005 SOT 2Z': {
    '1': '10Z:InfoSteele + 1Z SOT (10)',
    '2': '11Z XL Ex-DyFa: ZAK + 1Z SOT (32)',
    '3': '11Z: PAS + 1Z: SOT',
    '4': null,
    '5': null,
    '6': null,
    '7': null,
    '8': null,
    '9': null,
    '10': null,
    '11': null,
    '12': null,
    '13': null,

  },
  'Gruppe 006 SOT 1Z': {
    '1': '10Z:InfoSteele + 1Z SOT (10)',
    '2': '11Z XL Ex-DyFa: ZAK + 1Z SOT (32)',
    '3': '11Z: PAS + 1Z: SOT',
      '4':'014::4Z: PAS mit Kopf',
      '5':'024::4Z: ZAK',
      '6':'026::6Z: PAS mit Kopf',
      '7':'031::2Z: ZAK',
      '8':'036::9Z: ZAK',
      '9':'041::8Z: ZAK',
      '10':'044::4ZL: ZAK',
      '11':'050::9Z: PAS Mini-Dyfa',
      '12':'053::4Z: ZAK',
      '13':'063::4Z XL: 2Z Info + 2Z ZAK',
      '14':'064::4Z XL: ZAK',
      '15':'068::3Z: PAS mit Kopf',
      '16':'080::8Z: PAS mit Kopf',
      '17':'081::8Z: PAS',
      '18':'083::4Z: PAS',
      '19':'085::4Z: PAS HIS Vorplatz',


  }
}


@Injectable()
export class FormatTreeDatabase {
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