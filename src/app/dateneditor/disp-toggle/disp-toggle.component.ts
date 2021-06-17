import { Component, OnInit, EventEmitter, Output } from '@angular/core';

//combobox-interface definition
interface View {
  name: string;
  value: string;
}

@Component({
  selector: 'app-disp-toggle',
  templateUrl: './disp-toggle.component.html',
  styleUrls: ['./disp-toggle.component.scss']
})
export class DispToggleComponent implements OnInit {

  public selectedVal: string
  //combibox Inhalte
  views: View[] = [
    {name: 'Tabelle', value: 'tabe' },
    {name: 'Grafik', value: 'graf'},
    {name: 'Detail', value: 'deta'},
  ];
  selectedView = this.views[0].value
  //
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.selectedVal = "tabe";
  }

  public valChange(val: string){
    this.selectedVal = val;
    this.sendMessage();
  }

  sendMessage() {
    this.messageEvent.emit(this.selectedVal);
  }
}
