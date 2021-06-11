import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddfolderComponent} from './addfolder/addfolder.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('treeview',{static: false}) treeview:any;

  foldername: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addFolder(){
    const dialogRef = this.dialog.open(AddfolderComponent, {
      width: '250px',
      data: {foldername: this.foldername}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.foldername = result;
      this.treeview.addFolder(this.foldername)
    });
  }

  message:string= "tabe";
  signalG:boolean= false;
  signalT:boolean= true;
  dialoghidden: boolean = true;
  dialogshow: boolean = false;
  
  receiveMessage($event:string) {
    if($event == "tabe" ) {
      this.signalT = true;
      this.signalG = false;
    }
    if($event == "graf") {
      this.signalT = false;
      this.signalG = true;
    }
    if($event == "both") {
      this.signalT = false;
      this.signalG = false;
    }
    this.message = $event;
  }

}
