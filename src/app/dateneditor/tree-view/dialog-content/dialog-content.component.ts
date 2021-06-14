import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content.component.html',
})
export class DialogContentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public animal: boolean) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
