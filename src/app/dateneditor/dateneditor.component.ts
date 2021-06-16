import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-dateneditor',
  templateUrl: './dateneditor.component.html',
  styleUrls: ['./dateneditor.component.scss']
})
export class DateneditorComponent implements OnInit {
  
  @ViewChild('toolbar', {static: false}) toolbar:any

  hiddenTable: boolean = false;
  help_content:string = "This container used to help User to understand some difficulty operation.";
  constructor() { }

  ngOnInit() {
  }

  leftContainerWidth: string = '20vw';
  mouseDownOnHandle: boolean = false;
  highlightHandle: string = '#e3e3e6';

  changeResizeMode(value: boolean): void{
    this.mouseDownOnHandle = value;
    if(value===true)
      this.highlightHandle = '#e3e3e6';
    else
      this.highlightHandle = '#c9c9e6';
  }
  
  changeLeftContainerWidth(event: MouseEvent): void{
    if(this.mouseDownOnHandle)
      this.leftContainerWidth = event.clientX - 10 + "px";
  }

}
