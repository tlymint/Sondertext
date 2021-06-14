import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { DialogContentComponent } from './dialog-content.component';


@NgModule({
  declarations: [DialogContentComponent],
  entryComponents: [DialogContentComponent],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ExampleDialogModule {}
