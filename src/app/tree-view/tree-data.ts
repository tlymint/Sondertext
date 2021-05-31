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


export const TREE_DATA = [
  {
    name: 'Item 1',
    children: [
      {
        name: 'Child 1',
        children: [
          { name: 'Grandchild 1', level: 3 },
          { name: 'Grandchild 2', level: 3 }
        ]
        ,
        level: 2
      },
      { name: 'Child 2', level: 2 },
      { name: 'Child 3',
        children: [
          { name: 'Grandchild 1', level: 3 },
          { name: 'Grandchild 2', level: 3 }
        ],
        level: 2
      }
    ],
    level: 1
  },
  {
    name: 'Item 2',
    children: [
      { name: 'Child 1', level: 2 },
      { name: 'Child 2', level: 2 },
    ],
    level: 1
  },
  {
    name: 'Item 3',
    children: [
      { name: 'Child 1', level: 2 },
      { name: 'Child 2', level: 2 },
      { name: 'Child 3', level: 2 }
    ],
    level: 1
  }
];


@Injectable()
export class ChecklistDatabase {
  dataChange: BehaviorSubject<TreeItem[]> = new BehaviorSubject<TreeItem[]>([]);

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

    /** Add an item to to-do list */
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

  updateItem(node: TreeItem, name: string) {
    node.name = name;
    this.dataChange.next(this.data);
  }
}