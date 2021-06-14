import { Component, Injectable } from '@angular/core';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';

export class TreeItem {
  children?: TreeItem[];
  name: string;
}

export class TreeItemFlat {
  name: string;
  level: number;
  parentId: number;
  expandable: boolean;
}


const TREE_DATA = {
  'Administration': {
      'Benutzerverwaltung': {
        'Neu': {
          value: 1,
          data: 0,
        },
        'Admin': 1,
        'Bedienplatz':2,
      },
      'Kommunikation': null,
      'GIS-Karte': null,
  },
  'DFI-Projektierung': {
    'DFI-Sonderfälle': null,
    'DFI-Anzeiger': null,
    'DFI-Haltestellen': null,
  },
  'Fahrplandaten':null,
  'Displaymasken':{
    'ZAK-Masken':null,
    'SOT-Masken':null,
    'ZZA-Masken':null,
    'MAM-Masken':null,
  },
  'Sondertexte': {
    'Normale-Sondertexte':null,
    'Sondertexte für Umleitungen':null,
    'Ständige Sondertexte':null,
    'Spezialfälle': {
      'MAM':null,
      'ZZA':null,
      'Test':null,
      'Grundbilder':null,
    }
  },
  'Aufträge':{
    'Benutzerdefinierte Aufträge':null,
    'Spezialfälle der Auftragsverwaltung':{
      'MAM-Anlage':null,
      'Evakuierung':null,
      'CMS-Aufträge':null,
      'Ausblenden von Linien':null,
    }
  },
  'Betriebstagebücher':{
    'Anzeigen von System und Fehlermeldungen':null,
    'Anzeigen Änderungs-Histroie':null,
    'Statistikdaten':null,
    'Berichte':null,
  }

};


@Injectable()
export class ChecklistDatabase {
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