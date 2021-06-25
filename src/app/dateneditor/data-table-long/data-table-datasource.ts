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
  {id: '1', Zeit: '04:46', RZL: '1177', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '1927', Fahrtart: '4', Umlauf: '7931'},
  {id: '2', Zeit: '05:03', RZL: '1130', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '528', Fahrtart: '0', Umlauf: '7931'},
  {id: '3', Zeit: '05:28', RZL: '1128', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '543', Fahrtart: '0', Umlauf: '7931'},
  {id: '4', Zeit: '06:03', RZL: '1130', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '528', Fahrtart: '0', Umlauf: '7931'},
  {id: '5', Zeit: '06:28', RZL: '1128', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '543', Fahrtart: '0', Umlauf: '7931'},
  {id: '6', Zeit: '07:03', RZL: '1130', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '528', Fahrtart: '0', Umlauf: '7931'},
  {id: '7', Zeit: '07:28', RZL: '1128', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '543', Fahrtart: '0', Umlauf: '7931'},
  {id: '8', Zeit: '08:03', RZL: '1130', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '528', Fahrtart: '0', Umlauf: '7931'},
  {id: '9', Zeit: '08:28', RZL: '1128', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '543', Fahrtart: '0', Umlauf: '7931'},
  {id: '10', Zeit: '08:48', RZL: '1178', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '11', Zeit: '09:08', RZL: '1179', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '12', Zeit: '09:47', RZL: '1180', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '13', Zeit: '10:08', RZL: '1179', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '14', Zeit: '10:47', RZL: '1180', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '15', Zeit: '11:08', RZL: '1179', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '16', Zeit: '11:47', RZL: '1180', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '17', Zeit: '12:08', RZL: '1179', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '18', Zeit: '13:08', RZL: '1179', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '19', Zeit: '13:47', RZL: '1180', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '20', Zeit: '14:08', RZL: '1179', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '21', Zeit: '14:47', RZL: '1180', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '22', Zeit: '15:08', RZL: '1179', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '23', Zeit: '15:47', RZL: '1180', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '24', Zeit: '16:08', RZL: '1179', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '25', Zeit: '16:47', RZL: '1180', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '26', Zeit: '17:08', RZL: '1179', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '27', Zeit: '17:47', RZL: '1180', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '28', Zeit: '18:08', RZL: '1179', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '29', Zeit: '18:47', RZL: '1180', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '30', Zeit: '19:08', RZL: '1181', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '31', Zeit: '19:48', RZL: '1178', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '32', Zeit: '20:08', RZL: '1181', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '33', Zeit: '20:48', RZL: '1178', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '34', Zeit: '21:08', RZL: '1181', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '35', Zeit: '21:33', RZL: '1130', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '36', Zeit: '21:58', RZL: '1128', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '528', Fahrtart: '0', Umlauf: '7931'},
  {id: '37', Zeit: '22:18', RZL: '1178', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '543', Fahrtart: '0', Umlauf: '7931'},
  {id: '38', Zeit: '22:38', RZL: '1181', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '0', Umlauf: '7931'},
  {id: '39', Zeit: '23:03', RZL: '1130', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '529', Fahrtart: '0', Umlauf: '7931'},
  {id: '40', Zeit: '23:48', RZL: '1178', RZL_Button: '', Richtung: '2', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '528', Fahrtart: '0', Umlauf: '7931'},
  {id: '41', Zeit: '00:06', RZL: '1181', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '543', Fahrtart: '0', Umlauf: '7931'},
  {id: '42', Zeit: '00:21', RZL: '1182', RZL_Button: '', Richtung: '1', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '512', Fahrtart: '5', Umlauf: '7931'},
  {id: '*', Zeit: '', RZL: '', RZL_Button: '', Richtung: '', M_Zeit: '', M_Linie: '', M_Kurs: '', Route: '', Fahrtart: '', Umlauf: ''},
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
