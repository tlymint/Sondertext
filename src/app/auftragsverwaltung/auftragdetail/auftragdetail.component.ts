import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auftragdetail',
  templateUrl: './auftragdetail.component.html',
  styleUrls: ['./auftragdetail.component.scss']
})
export class AuftragdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  removeQuotes(value: string){
    const Value2 = value.replace(/\\*/g,'');
    return Value2.replace(/^["'](.+(?=["']$))["']$/, '$1');
  }


}
