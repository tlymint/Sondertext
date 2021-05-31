export class TreeItem {
  children?: TreeItem[];
  name: string;
  value: number;
  level: number;
}

export const TREE_DATA: TreeItem[] = [
  {
    name: 'Item 1',
    value: 4,
    level: 1
  },
  {
    name: 'Item 2',
    value: 5,
    level: 1
  },
  {
    name: 'Item 3',
    value: 6,
    level: 1
  }
];
