import { Component, Input, OnInit } from '@angular/core';
import { ToolbarAppComponent } from 'src/app/dateneditor/toolbar-app/toolbar-app.component';


@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

  @Input() dispToolbar: ToolbarAppComponent;
  constructor() { }

  ngOnInit() {
  }

  rowClicked1:any;
  rowClicked2:any;
  rowClicked3:any;

  filteredApiDataFiles = [
    { li: '@Li', z: '@Z', wmin: '@WMin' },
    { li: '@Li', z: '@Z', wmin: '@WMin' },
    { li: '@Li', z: '@Z', wmin: '@WMin' },
  ];

  changeTableRowColor(idx1: any) { 
    if(this.rowClicked1 === idx1) this.rowClicked1 = -1;
    else{ this.rowClicked1 = idx1;
          this.rowClicked2 = -1;
          this.rowClicked3 = -1;
    }
  }
  changeTableRow2Color(idx2: any) { 
    if(this.rowClicked2 === idx2) this.rowClicked2 = -1;
    else{ this.rowClicked2 = idx2;
          this.rowClicked1 = -1;
          this.rowClicked3 = -1;
    }
  }
  changeTableRow3Color(idx3: any) { 
    if(this.rowClicked3 === idx3) this.rowClicked3 = -1;
    else{ this.rowClicked3 = idx3;
          this.rowClicked1 = -1;
          this.rowClicked2 = -1;
    }
  }
}
