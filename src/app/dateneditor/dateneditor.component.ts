import { Component, OnInit,ViewChild } from '@angular/core';


@Component({
  selector: 'app-dateneditor',
  templateUrl: './dateneditor.component.html',
  styleUrls: ['./dateneditor.component.scss']
})
export class DateneditorComponent implements OnInit {
  
  @ViewChild('toolbar', {static: false}) toolbar:any

  //variable using to resize container left and right
  oldX = 0;
  //
  hiddenTable: boolean = false;
  help_content:string = "This container used to help User to understand some difficulty operation.";
  constructor() { }

  ngOnInit() {
  }

  leftContainerWidth: number = 250;
  mouseDownOnHandle: boolean = false;
  highlightHandle: string = '#e3e3e6';

  changeResizeMode(value: boolean, event:MouseEvent): void{
    this.mouseDownOnHandle = value;
    if(value===true) {
      this.highlightHandle = '#e3e3e6';
      this.oldX = event.clientX;
    }
      
    else
      this.highlightHandle = '#c9c9e6';
  }
  
  changeLeftContainerWidth(event: MouseEvent): void{
    if(this.mouseDownOnHandle)
    {
      this.leftContainerWidth += (event.clientX - this.oldX);
      this.oldX = event.clientX;
    }
      
      
  }

}
