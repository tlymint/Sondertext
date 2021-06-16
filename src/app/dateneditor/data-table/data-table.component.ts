import { AfterViewInit, Component, OnInit, ViewChild,Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
  
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

    dataSource: DataTableDataSource;
    grafikSource: any;
    clickedRows = new Set<DataTableItem>();
  
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name'];
  
    ngOnInit() {
      this.dataSource = new DataTableDataSource();
    }
  
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
      this.grafikSource = this.table.dataSource;
    }
  }
  