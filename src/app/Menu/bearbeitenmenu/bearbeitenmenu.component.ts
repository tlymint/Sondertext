import { Component, OnInit, Input } from '@angular/core';
import { ToolbarComponent } from 'src/app/dateneditor/toolbar/toolbar.component';

@Component({
  selector: 'app-bearbeitenmenu',
  templateUrl: './bearbeitenmenu.component.html',
  styleUrls: ['./bearbeitenmenu.component.scss']
})
export class BearbeitenmenuComponent implements OnInit {
  @Input() toolbar: ToolbarComponent;

  constructor() { }

  ngOnInit() {
  }

  openDateneditor() {
    console.log('opendateneditor');
    this.toolbar.showDatenEditor = false;
  }

}
