import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaymanagement',
  templateUrl: './displaymanagement.component.html',
  styleUrls: ['./displaymanagement.component.scss']
})
export class DisplaymanagementComponent implements OnInit {
  hiddenDatenEditor: boolean = false;
  hiddenDisplayEditor: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
