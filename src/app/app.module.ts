import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**UI Module */
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

/**Tree-view List for Displayeditor */
import { TreeViewComponent } from './tree-view/tree-view.component';

/**Show the Sondertext-format Table */
import { TableComponent } from './table/table.component';

/**Display-Dialog Windows */
import { ShowComponent } from './show/show.component';
import { MatSelectModule} from "@angular/material/select";
import { MatListModule } from '@angular/material/list';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/**Pop-up Dialog */
import { DialogContentComponent } from './tree-view/dialog-content/dialog-content.component';


/**Switch Table and Display-Windows */
import { MatDialogModule} from '@angular/material/dialog';
import { DispToggleComponent } from './disp-toggle/disp-toggle.component';
import { MatButtonToggleModule} from '@angular/material/button-toggle';

/**Drucken */
import { DruckenComponent } from './drucken/drucken.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

/**Toolbar for Tree-view */
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddfolderComponent } from './toolbar/addfolder/addfolder.component';

/**Data-Table */
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataGrafikComponent } from './data-grafik/data-grafik.component';
import { DataTableComponent } from './data-table/data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    TableComponent,
    ShowComponent,
    DruckenComponent,
    DialogContentComponent,
    DispToggleComponent,
    DruckenComponent,
    ToolbarComponent,
    AddfolderComponent,
    DataGrafikComponent,
    DataTableComponent,
  ],
  entryComponents: [DialogContentComponent, AddfolderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
