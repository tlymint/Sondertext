import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-drucken',
  templateUrl: './drucken.component.html',
  styleUrls: ['./drucken.component.scss']
})
export class DruckenComponent  {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PrintPreviewComponent);
  }

}

@Component({
  selector: 'print-preview',
  templateUrl: 'print-preview.html'
})
export class PrintPreviewComponent {}