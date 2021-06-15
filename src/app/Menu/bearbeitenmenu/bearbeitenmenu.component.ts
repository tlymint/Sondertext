import { Component, OnInit, Input } from '@angular/core';
import { DisplaymanagementComponent } from 'src/app/displaymanagement/displaymanagement.component';

@Component({
  selector: 'app-bearbeitenmenu',
  templateUrl: './bearbeitenmenu.component.html',
  styleUrls: ['./bearbeitenmenu.component.scss']
})
export class BearbeitenmenuComponent implements OnInit {
  @Input() displaymanagement: DisplaymanagementComponent;

  constructor() { }

  ngOnInit() {
  }

  openDateneditor() {
    this.displaymanagement.hiddenDatenEditor = false;
    this.displaymanagement.hiddenDisplayEditor = true;
  }

  openDisplayeditor(){
    this.displaymanagement.hiddenDatenEditor = true;
    this.displaymanagement.hiddenDisplayEditor = false;
  }

}
