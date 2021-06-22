import { Component, OnInit,ViewChild } from '@angular/core';
import { TreeViewComponent } from './tree-view/tree-view.component';



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

  get self(): DateneditorComponent {
    return this;
  }

  leftContainerWidth: number = 250;
  mouseDownOnHandle: boolean = false;
  hideSondertext: boolean = true;
  showSondertext: boolean = true;
  highlightHandle: string = 'rgb(243, 243, 243)';

  changeResizeMode(value: boolean, event:MouseEvent): void{
    this.mouseDownOnHandle = value;
    if(value===true) {
      this.highlightHandle = 'rgb(200, 200, 200)';
      this.oldX = event.clientX;
    }
      
    else
      this.highlightHandle = 'rgb(243, 243, 243)';
  }
  
  changeLeftContainerWidth(event: MouseEvent): void{
    if(this.mouseDownOnHandle)
    {
      this.leftContainerWidth += (event.clientX - this.oldX);
      this.oldX = event.clientX;
    }
  }

  showTable(){
    console.log('tableshow');
    this.hideSondertext = true;
    this.showSondertext = false;
  }

  notshowTable(){
    console.log('Detailshow');
    this.hideSondertext = false;
    this.showSondertext = true;
  }

  /**To do */

  Uebernehmen(){

  }

  Okay(){

  }

  Abbrechen(){

  }

}
