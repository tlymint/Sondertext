import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-dateneditor',
  templateUrl: './dateneditor.component.html',
  styleUrls: ['./dateneditor.component.scss']
})
export class DateneditorComponent implements OnInit {
  
  @ViewChild('toolbar', {static: false}) toolbar:any

  hiddenTable: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
