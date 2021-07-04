import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

export interface disptableTemplate {
  id: string;
  nr: string;
  zeile: string;
  kateg: string;
  text: string;
  layer: string;
  font: string;
  ausri: string;
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  senden: string;
}

const DISP_DATA: disptableTemplate[] = [
  {id:"1",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"2",nr:"2",zeile:"1",kateg:"Text fest",text:"Unbest. verspätet",layer:"3",font:"07091ba3_a.bin",ausri:"Links",x1:"29",y1:"0",x2:"123",y2:"8",senden:"Ja"},
  {id:"3",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"4",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"5",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"6",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"7",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"8",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"9",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"10",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"11",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"12",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"13",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"14",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"15",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"16",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"17",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"18",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"19",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"20",nr:"1",zeile:"1",kateg:"Linie-Nr",text:"",layer:"0",font:"07091ba3_a.bin",ausri:"Links",x1:"0",y1:"0",x2:"27",y2:"8",senden:"Ja"},
  {id:"*",nr:"",zeile:"",kateg:"",text:"",layer:"",font:"",ausri:"",x1:"",y1:"",x2:"",y2:"",senden:""},

]

@Component({
  selector: 'app-tabledisplay',
  templateUrl: './tabledisplay.component.html',
  styleUrls: ['./tabledisplay.component.scss']
})
export class TabledisplayComponent implements OnInit {
  displayTableColumns: string[]=["id","nr","zeile","kategorie","text","layer","font","ausrichtung","x1","y1","x2","y2","senden"];
  dataSource=DISP_DATA;

  @ViewChild(MatMenuTrigger, {static: true})
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };

  constructor() { }

  ngOnInit() {
  }
  clickedRows = new Set<disptableTemplate>();
  elementClicked:any;
  changeTableElementColor(idx: any) { 
    if(this.elementClicked === idx) this.elementClicked = -1;
    else this.elementClicked = idx;
  }
  //Dong: right-click-contextmenu
  onContextMenu(event: MouseEvent, element: disptableTemplate) {
    event.preventDefault();
 
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': element };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }
}
