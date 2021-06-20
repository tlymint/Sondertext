import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  RZL_Button: string;
  Umlauf: string;
  Fahrtart: string;
  Route: string;
  M_Kurs: string;
  M_Linie: string;
  M_Zeit: string;
  Richtung: string;
  RZL: string;
  Zeit: string;
  id: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {id: '1', Zeit: '07:10', RZL: '2732', RZL_Button: '', Richtung: '1', M_Zeit: '',
   M_Linie: '', M_Kurs: '', Route: '794', Fahrtart: '4', Umlauf: '75204'},
  {id: '2', Zeit: '07:21', RZL: '2733', RZL_Button: '', Richtung: '1', M_Zeit: '07:49',
   M_Linie: '752', M_Kurs: '04', Route: '5', Fahrtart: '0', Umlauf: '75204'},
  {id: '*', Zeit: '', RZL: '', RZL_Button: '', Richtung: '', M_Zeit: '',
   M_Linie: '', M_Kurs: '', Route: '', Fahrtart: '', Umlauf: ''},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getSortedData([...this.data]);
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {} 

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'Umlauf': return compare(a.Umlauf, b.Umlauf, isAsc);
        case 'Fahrtart': return compare(a.Fahrtart, b.Fahrtart, isAsc);
        case 'Route': return compare(a.Route, b.Route, isAsc);
        case 'M_Kurs': return compare(a.M_Kurs, b.M_Kurs, isAsc);
        case 'M_Linie': return compare(a.M_Linie, b.M_Linie, isAsc);
        case 'M_Zeit': return compare(a.M_Zeit, b.M_Zeit, isAsc);
        case 'Richtung': return compare(a.Richtung, b.Richtung, isAsc);
        case 'RZL': return compare(a.RZL, b.RZL, isAsc);
        case 'Zeit': return compare(a.Zeit, b.Zeit, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
