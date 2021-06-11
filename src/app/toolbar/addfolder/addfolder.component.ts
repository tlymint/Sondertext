import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-addfolder',
  templateUrl: './addfolder.component.html',
  styleUrls: ['./addfolder.component.scss']
})

export class AddfolderComponent{

  constructor(
    public dialogRef: MatDialogRef<AddfolderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

}
