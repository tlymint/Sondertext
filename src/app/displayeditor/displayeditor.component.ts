import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayeditor',
  templateUrl: './displayeditor.component.html',
  styleUrls: ['./displayeditor.component.scss']
})
export class DisplayeditorComponent implements OnInit {

  hiddenGrafik: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
