import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-grafik',
  templateUrl: './data-grafik.component.html',
  styleUrls: ['./data-grafik.component.scss']
})
export class DataGrafikComponent implements OnInit {

  @Input() grafikSource:any;
  displayedColumns = ['id', 'name'];
  constructor() { }

  ngOnInit() {
  }

}
