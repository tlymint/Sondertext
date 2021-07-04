import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {FormControl} from '@angular/forms';

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
  disableSelect = new FormControl(false);

  public selectedVal: string
  //combobox Inhalte
  views: View[] = [
    {name: 'Tabelle', value: 'tabe' },
    {name: 'Grafik', value: 'graf'},
    {name: 'Detail', value: 'deta'},
  ];
  selectedView = this.views[1].value
  //
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.selectedVal = "graf";
  }

  public valChange(val: string){
    this.selectedVal = val;
    this.sendMessage();
  }

  sendMessage() {
    this.messageEvent.emit(this.selectedVal);
  }
  
}
