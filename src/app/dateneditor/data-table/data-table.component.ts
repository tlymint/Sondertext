import { AfterViewInit, Component, OnInit, ViewChild,Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
// Dong: right-click-contextmenu
import { MatMenu, MatMenuTrigger } from '@angular/material';
// bis here
  
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableItem>;
  @Input() toolbar: ToolbarComponent;
  // Dong: right-click-contextmenu
  @ViewChild(MatMenuTrigger, {static: true})
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  // bis here

  dataSource: DataTableDataSource;
  grafikSource: any;
  clickedRows = new Set<DataTableItem>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'Zeit', 'RZL', 'RZL_Button', 'Richtung', 'M_Zeit', 'M_Linie',
  'M_Kurs', 'Route', 'Fahrtart', 'Umlauf'];

  ngOnInit() {
    this.dataSource = new DataTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.grafikSource = this.table.dataSource;
  }

  rowClicked:any;
  changeTableRowColor(idx: any) { 
  if(this.rowClicked === idx) this.rowClicked = -1;
  else this.rowClicked = idx;
  }

  //Dong: right-click-contextmenu
  onContextMenu(event: MouseEvent, row: DataTableItem) {
    event.preventDefault();
 
    this.contextMenuPosition.x = event.clientX -250 + 'px';
    this.contextMenuPosition.y = event.clientY -140 + 'px';
    this.contextMenu.menuData = { 'item': row };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }
  onContextMenuAction1() {
    alert(`Click on Action 1 `);
  }
  
  onContextMenuAction2() {
    alert(`Click on Action 2`);
  }
  // bis here
  selectedRowIndex = -1;  

  highlight(row){
    this.selectedRowIndex = row.id;
  }
}

//[ngClass]="{'highlight': selectedRowIndex == row.id}" (click)="highlight(row)"
  
