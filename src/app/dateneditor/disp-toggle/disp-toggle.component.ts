import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-disp-toggle',
  templateUrl: './disp-toggle.component.html',
  styleUrls: ['./disp-toggle.component.scss']
})
export class DispToggleComponent implements OnInit {

  public selectedVal: string
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
