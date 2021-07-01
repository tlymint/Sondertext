import { Component, Input, OnInit, ViewChild } from '@angular/core';

interface View {
  name: string;
  value: string;
}

@Component({
  selector: 'app-toolbar-app',
  templateUrl: './toolbar-app.component.html',
  styleUrls: ['./toolbar-app.component.scss']
})
export class ToolbarAppComponent implements OnInit {
  @Input() chooseDE: boolean;
  @ViewChild('disp',{static: false}) disp:any;
  
  views: View[] = [
    {name: 'Anzeigergruppe und Einzelanzeiger', value: 'anzeiger' },
    {name: 'Linienauswahl', value: 'linien'}
  ];

  constructor() { }

  ngOnInit() {
  }

  showDyFa(){
    this.disp.views = this.views;
    this.chooseDE = true;
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
