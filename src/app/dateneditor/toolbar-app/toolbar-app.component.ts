import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-app',
  templateUrl: './toolbar-app.component.html',
  styleUrls: ['./toolbar-app.component.scss']
})
export class ToolbarAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message:string= "tabe";
  signalG:boolean= true;
  signalT:boolean= false;
  dialoghidden: boolean = false;
  dialogshow: boolean = true;

  receiveMessage($event:string) {
    if($event == "tabe" ) {
      this.signalT = true;
      this.signalG = false;
    }
    if($event == "graf") {
      this.signalT = false;
      this.signalG = true;
    }
    this.message = $event;
  }

}
