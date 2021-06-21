import { AfterViewInit, Component, OnInit, ViewChild,Input } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PeriodicElement {
  Text: string;
  Kategorie: string;
  Ausrichtung: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
  Text: 'Zu dem Konzert von Udo Lindenberg fährt die U78 bereits ab 15 Uhr verstärkt bis Haltestelle "Arena / Messe Nord". Die Haltestelle "Mörikestraße" wird zwischen 15 Uhr und 16 Uhr nicht bedient.', 
  Kategorie: 'Laufschrift',
  Ausrichtung: null
}
];


/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
 @Component({
  selector: 'app-detailansicht',
  templateUrl: './detailansicht.component.html',
  styleUrls: ['./detailansicht.component.scss']
})

export class DetailansichtComponent {
  displayedColumns: string[] = ['Text', 'Kategorie','Ausrichtung'];
  dataSource = ELEMENT_DATA;

  removeQuotes(value: string){
    const Value2 = value.replace(/\\*/g,'');
    return Value2.replace(/^["'](.+(?=["']$))["']$/, '$1');
  }
}

