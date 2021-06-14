import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ChecklistDatabase } from '../tree-view/tree-data';
import { TreeViewComponent } from '../tree-view/tree-view.component';
import {AddfolderComponent} from './addfolder/addfolder.component';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [ChecklistDatabase]
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
  signalG:boolean= true;
  signalT:boolean= true;
  dialoghidden: boolean = true;
  dialogshow: boolean = true;
  showDatenEditor: boolean = true;

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

  showDialog(){
    this.dialoghidden = true;
    this.dialogshow = false;
  }

  hideDialog(){
    this.dialoghidden = false;
    this.dialogshow = true;
  }
}
