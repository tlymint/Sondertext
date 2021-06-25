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
    '4Z XL BBR': null,
    '8Z BBR': null,
  },
  'Gruppe 004 SOT 4Z': {
    '1': '11Z: PAS + 4Z SOT (10)',
    '2': '3Z: 4Z SOT HHO (68)',
    '3': '4Z XL BBR: 4Z SOT (101)',
    '4': '4Z XL: 4Z SOT (64)',
    '5': '4Z: 4Z SOT',
    '6': '4Z: 4Z FETT',
    '7': '4Z: 4Z SOT KLP (114)',
    '8': '4Z: 4Z SOT KLP (124)',
    '9': '4ZL: 4Z SOT',
    '10': '6Z: ZAK + 4Z SOT (4)',
    '11': '8Z BBR: PAS + 4Z SOT (nur Arena)(102)',
    '12': '4Z XL BBR: 4Z SOT (101)',


  },
  'Gruppe 005 SOT 2Z': {
    '1': '10Z: InfoSteele + 2Z SOT (10)',
    '2': '11Z: PAS + 2Z SOT (10)',
    '3': '2Z: 2Z SOT'
  },
  'Gruppe 006 SOT 1Z': {
    '1': '10Z:InfoSteele + 1Z SOT (10)',
    '2': '11Z XL Ex-DyFa: ZAK + 1Z SOT (32)',
    '3': '11Z: PAS + 1Z: SOT',
    '4':'17Z XL Ex-DyFa:4Z: ZAK + 1Z SOT (100)',
    '5':'2Z:1Z SOT (31)',
    '6':'3Z XL Ex-DyFa:4Z: ZAK + 1Z SOT (100)',
    '7':'3Z: ZAK + 1Z SOT(68)',
    '8':'3ZL: ZAK + 1Z SOT(53)'
  },
  'Gruppe 007 Dunkelbilder': {
    '4Z: Dunkel': null
  },
  'Gruppe 008 Nicht Einsteigen': {
    '4Z: Nicht Einsteigen': null
  },
  'Gruppe 009 Lautsp. + Wagenbesch.': {
    '4Z: LS und WB': null
  },
  'Gruppe 010 Rauchverbot': {
    '4Z: Rauchverbot': null
  },
  'Gruppe 012': {
    '3ZL: 3Z SOT': null
  },
  'Gruppe 013': {
    '6Z: 6Z SOT': null,
    '8Z: 8Z SOT': null
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