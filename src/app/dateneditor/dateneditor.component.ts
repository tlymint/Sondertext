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
  chooseDateneditor: boolean = false;
  chooseDateneditor2: boolean = false;
  chooseSondertext: boolean = false;
  chooseAuftrag: boolean = false;
  chooseDisplayeditor: boolean = false;
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

  /**
   * switch the display of the right container
   * showSondertexte(); showAuftraege(); showDateneditor();
   */
   showDateneditor(){
    //console.log('tableshow');
    this.chooseDateneditor = true;
    this.chooseDateneditor2 = false;
    this.chooseSondertext = false;
    this.chooseAuftrag = false;
    this.chooseDisplayeditor = false;
  }
  showDateneditor2(){
    //console.log('tableshow');
    this.chooseDateneditor = true;
    this.chooseDateneditor2 = true;
    this.chooseSondertext = false;
    this.chooseAuftrag = false;
    this.chooseDisplayeditor = false;
  }

  showSondertexte(){
    //console.log('Detailshow');
    this.chooseDateneditor = false;
    this.chooseDateneditor2 = false;
    this.chooseSondertext = true;
    this.chooseAuftrag = false;
    this.chooseDisplayeditor = false;
  }

  showAuftraege(){
    //console.log('Auftrag Ansicht');
    this.chooseDateneditor = false;
    this.chooseDateneditor2 = false;
    this.chooseSondertext = false;
    this.chooseAuftrag = true;
    this.chooseDisplayeditor = false;
  }

  showDisplayeditor(){
    //console.log('Displayeditor');
    this.chooseDateneditor = false;
    this.chooseDateneditor2 = false;
    this.chooseSondertext = false;
    this.chooseAuftrag = false;
    this.chooseDisplayeditor = true;
  }

  /**To do */

  Uebernehmen(){

  }

  Okay(){

  }

  Abbrechen(){

  }

}
