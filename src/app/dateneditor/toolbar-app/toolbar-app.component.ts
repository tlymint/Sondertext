import { Component, Input, OnInit, ViewChild } from '@angular/core';

interface AuftragView {
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
  @Input() chooseAf: boolean;
  @ViewChild('disp',{static: false}) disp:any;

  
  
  auftragViews: AuftragView[] = [
    {name: 'Anzeigergruppe und Einzelanzeiger', value: 'show' },
    {name: 'Linienauswahl', value: 'line'}
  ];
  choosedShow:boolean = true;
  selectedView = this.auftragViews[0].value;

  constructor() { }

  ngOnInit() {
    
  }

  get self(): ToolbarAppComponent {
    return this;
  }

  

  message:string= "tabe";
  signalG:boolean= true;
  signalT:boolean= false;
  dialoghidden: boolean = false;
  dialogshow: boolean = true;
  groupIsOpened:boolean = false;

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

  valChange(val:string){
    if(val == "show"){
      this.choosedShow = true;
    }
    else {
      this.choosedShow = false;
    }
    
  }

}
