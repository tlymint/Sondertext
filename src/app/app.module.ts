import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TableComponent } from './table/table.component';
import { ShowComponent } from './show/show.component';
import { MatSelectModule} from "@angular/material/select";
import { MatListModule} from '@angular/material/list';
import { CdkTableModule } from '@angular/cdk/table';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    TableComponent,
    ShowComponent,
    TestComponent,
  ],
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
    ReactiveFormsModule
  ],
  exports: [TestComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
