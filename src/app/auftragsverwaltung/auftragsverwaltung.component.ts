import { Component, OnInit, ViewChild } from '@angular/core';
import { MatListIconCssMatStyler } from '@angular/material';
import { MatTable } from '@angular/material/table';
import {  MatMenuTrigger } from '@angular/material';

export interface AuftTemplate {
  id: string;
  nr: string;
  bez: string;
  gruppe: string;
  grBut: string;
  text: string;
  txBut: string;
  prio: string;
  begA: string;
  begU: string;
  endA: string;
  endU: string;
  all: string;
  for: string;
  zykl: string;
  tagt: string;
  stat: string;
}

const ELEMENT_DATA: AuftTemplate[] = [
  {id: "1", nr: "13", bez: "Bauarbeiten U79 Duisburg", gruppe: "Dyfas (15)", grBut:"",  text: "0", txBut:"", prio: "minimal", begA: "01.01.2100", 
  begU: "06:00", endA: "01.01.2100", endU: "12:00", all: "180", for: "60", zykl: "dauernd", tagt: "", stat:"erteilt" },
  {id: "2", nr: "1", bez: "EVAKUIERUNGSTEXT Steige de/en Grundtext", gruppe: "Evakuierung Tunnel", grBut:"", text: "1548", txBut:"", prio: "hoch",
  begA: "01.01.2025", begU: "03:30", endA: "01.01.2026", endU: "03:30", all: "180", for: "30", zykl: "dauernd", tagt: "", stat: "erteilt"},
  {id: "3", nr: "9", bez: "Heinrichstraße Steig 3", gruppe: "HRS->DHB Strab 4Z", grBut:"", text: "0", txBut:"", prio: "minimal",
  begA: "27.02.2019", begU: "14:57", endA: "31.12.2500", endU: "03:15", all: "120", for: "60", zykl: "dauernd", tagt: "", stat: "aktiv"},
  {id: "4", nr: "8", bez: "ISS-DOME Hinweistext Umstieg HBF", gruppe: "Dyfas (5)", grBut:"", text: "0", txBut:"", prio: "minimal",
  begA: "16.02.2019", begU: "10:26", endA: "02.02.2023", endU: "10:27", all: "60", for: "30", zykl: "dauernd", tagt: "", stat: "aktiv"},
  {id: "5", nr: "17", bez: "NEUSTART diesen Auftrag nur kopieren!", gruppe: "ALLE", grBut:"", text: "25", txBut:"", prio: "hoch",
  begA: "11.11.2034", begU: "10:00", endA: "01.01.2035", endU: "11:56", all: "", for: "30", zykl: "dauernd", tagt: "", stat: "erteilt"},
  {id: "6", nr: "2", bez: "aaa", gruppe: "AAP->SCD 4Z", grBut:"", text: "1547", txBut:"", prio: "niedrig",
  begA: "14.06.2021", begU: "15:13", endA: "14.06.2021", endU: "15:14", all: "60", for: "30", zykl: "dauernd", tagt: "", stat: "abgelaufen"},
  {id: "*", nr: "", bez: "", gruppe: "", grBut:"", text: "", txBut:"", prio: "",
  begA: "", begU: "", endA: "", endU: "", all: "", for: "", zykl: "", tagt: "", stat: ""},
];
  
interface MComboBox {
  name: string;
  value: string;
}



@Component({
  selector: 'app-auftragsverwaltung',
  templateUrl: './auftragsverwaltung.component.html',
  styleUrls: ['./auftragsverwaltung.component.scss']
})
export class AuftragsverwaltungComponent implements OnInit {
  displayedColumns: string[]=["id","nr","bez","gruppe","grupButton","text", "textButton","prio","beginnAm","beginnUm",
  "endAm","endUm","all","for","zyklus","tagtype","status"];
  mPrios:MComboBox[] = [
    {name: "", value: ""}, {name: "hoch", value:"hoch"}, {name: "mittel", value:"mittel"}, {name: "niedrig", value:"niedrig"}, 
    {name: "minimal", value:"minimal"} 
  ];
  mZykls:MComboBox[] = [
    {name: "", value: ""}, {name: "dauernd", value: "dauernd"}, {name: "täglich", value: "täglich"}, {name: "Mo - Do", value: "Mo - Do"}, 
    {name: "Mo - Fr", value: "Mo - Fr"}, {name: "Freitag", value: "Freitag"}, {name: "Samstag", value: "Samstag"}, 
    {name: "Sonntag", value: "Sonntag"}, {name: "Tagtype", value: "Tagtype"}
  ];
  
  dataSource=ELEMENT_DATA;

  showGruppen: boolean = false;
  hiddenGruppen: boolean = true;

  // Dong: right-click-contextmenu
  @ViewChild(MatMenuTrigger, {static: true})
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: '0px', y: '0px' };
  // bis here


  constructor() { }

  ngOnInit() {
  }
  public boxValChange(val: string, element: string){
    element = val;
  }
  clickedRows = new Set<AuftTemplate>();
  elementClicked:any;
  changeTableElementColor(idx: any) { 
  if(this.elementClicked === idx) this.elementClicked = -1;
  else this.elementClicked = idx;
  }

  //Dong: right-click-contextmenu
  onContextMenu(event: MouseEvent, element: AuftTemplate) {
    event.preventDefault();
 
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': element };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  openDyFaGruppen(){
    this.showGruppen = true;
    this.hiddenGruppen = false;
  }
}
