import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dyfa-gruppen',
  templateUrl: './dyfa-gruppen.component.html',
  styleUrls: ['./dyfa-gruppen.component.scss']
})
export class DyfaGruppenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  oldX = 0;
  //
  hiddenTable: boolean = false;
  mouseDownOnHandle: boolean = false;
  leftContainerWidth: number = 600;
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

}
