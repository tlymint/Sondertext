import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-toolbar-app',
  templateUrl: './toolbar-app.component.html',
  styleUrls: ['./toolbar-app.component.scss']
})
export class ToolbarAppComponent implements OnInit {
  @Input() chooseDE: boolean;
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
      this.signalT = false;
      this.signalG = true;
    }
    if($event == "graf") {
      this.signalT = true;
      this.signalG = false;
    }
    this.message = $event;
  }

}
