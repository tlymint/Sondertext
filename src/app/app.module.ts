import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**UI Module */
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 

/**Tree-view List for Displayeditor */
import { TreeViewComponent } from './dateneditor/tree-view/tree-view.component';

/**Show the Sondertext-format Table */
import { TableComponent } from './sondertext-datenbank/table/table.component';

/**Display-Dialog Windows */
import { ShowComponent } from './sondertext-datenbank/show/show.component';
import { MatSelectModule} from "@angular/material/select";
import { MatListModule } from '@angular/material/list';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/**Pop-up Dialog */
import { DialogContentComponent } from './dateneditor/tree-view/dialog-content/dialog-content.component';


/**Switch Table and Display-Windows */
import { MatDialogModule} from '@angular/material/dialog';
import { DispToggleComponent } from './dateneditor/disp-toggle/disp-toggle.component';
import { MatButtonToggleModule} from '@angular/material/button-toggle';

/**Drucken */
import { DruckenComponent } from './drucken/drucken.component';
import { PrintPreviewComponent } from './drucken/drucken.component';
import { ToolbarComponent } from './dateneditor/toolbar/toolbar.component';


/**Toolbar for Tree-view */
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddfolderComponent } from './dateneditor/toolbar/addfolder/addfolder.component';

/**scrolling */
import { ScrollingModule } from '@angular/cdk/scrolling';

/**Data-Table */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DateimenuComponent } from './Menu/dateimenu/dateimenu.component';

import {MatMenuModule} from '@angular/material/menu';

import {MatSidenavModule} from '@angular/material/sidenav';
import { BearbeitenmenuComponent } from './Menu/bearbeitenmenu/bearbeitenmenu.component';
import { AnsichtmenuComponent } from './Menu/ansichtmenu/ansichtmenu.component';
import { ToolbarAppComponent } from './dateneditor/toolbar-app/toolbar-app.component';
import { DisplayeditorComponent } from './displayeditor/displayeditor.component';
import { DateneditorComponent } from './dateneditor/dateneditor.component';
import { GrafikComponent } from './displayeditor/grafik/grafik.component';
import { SondertextDatenbankComponent } from './sondertext-datenbank/sondertext-datenbank.component';
import { DisplaymanagementComponent } from './displaymanagement/displaymanagement.component';
import { EditorTableComponent } from './dateneditor/editor-table/editor-table.component';
import { DataTableComponent } from './dateneditor/data-table/data-table.component';
import { DataGrafikComponent } from './dateneditor/data-grafik/data-grafik.component';
import { TestComponent } from './test/test.component';

// costum right-click contextmenu
import { DetailansichtComponent } from './dateneditor/detailansicht/detailansicht.component';

import { NgMarqueeModule } from 'ng-marquee';
import { AuftragsverwaltungComponent } from './auftragsverwaltung/auftragsverwaltung.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { DialogTableComponent } from './dateneditor/data-table/data-table.component';
import { DataTableLongComponent } from './dateneditor/data-table-long/data-table-long.component';
import { DialogTableLongComponent } from './dateneditor/data-table-long/data-table-long.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    TableComponent,
    ShowComponent,
    DruckenComponent,
    DialogContentComponent,
    DataTableComponent ,
    DataGrafikComponent,
    DispToggleComponent,
    DruckenComponent,
    ToolbarComponent,
    AddfolderComponent,
    DateimenuComponent,
    BearbeitenmenuComponent,
    AnsichtmenuComponent,
    ToolbarAppComponent,
    DisplayeditorComponent,
    DateneditorComponent,
    GrafikComponent,
    SondertextDatenbankComponent,
    DisplaymanagementComponent,
    EditorTableComponent,
    PrintPreviewComponent,
    TestComponent,

    DetailansichtComponent,

    AuftragsverwaltungComponent,

    DataDisplayComponent,
    DialogTableComponent,
    DataTableLongComponent,
    DialogTableLongComponent,
  ],
  entryComponents: [
    DialogContentComponent, 
    AddfolderComponent,
    DruckenComponent,
    PrintPreviewComponent,
    DialogTableComponent,
    DialogTableLongComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    CdkTableModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatSidenavModule,
    ScrollingModule,
    MatCardModule,
    NgMarqueeModule,
  ],
  providers: [ToolbarComponent, TreeViewComponent,ShowComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
