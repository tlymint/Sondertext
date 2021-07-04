import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  

export interface PeriodicElement {
  recht: string;
  wert: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {recht: 'Passwort', wert:'aktiv'},
  {recht: 'Datei: Abmeldung', wert:'aktiv'},
  {recht: 'Datei: Grafikeditor', wert:'aktiv'},
  {recht: 'Datei: Programm beenden', wert:'aktiv'},
  {recht: 'Dateneditor: Administrator', wert:'aktiv'},
  {recht: 'Dateneditor: Betriebstageuch erweitert', wert:'aktiv'},
  {recht: 'Dateneditor: DyFa-Gruppen', wert:'aktiv'},
  {recht: 'Dateneditor: Grafikdaten', wert:'aktiv'},
  {recht: 'Bearbeiten: Dateneditor', wert:'aktiv'},
  {recht: 'Bearbeiten: Sondertextdatenbank', wert:'aktiv'},
  {recht: 'Bearbeiten: Benutzerdefinierte Aufträge', wert:'aktiv'},
  {recht: 'Bearbeiten: Ständige Aufträge', wert:'aktiv'},
];

@Component({
  selector: 'app-editor-table',
  templateUrl: './editor-table.component.html',
  styleUrls: ['./editor-table.component.scss']
})
export class EditorTableComponent{
  /** 

  displayedColumns: string[] = ['recht', 'wert'];
  dataSource = ELEMENT_DATA;

  title = 'read-xml-angular8';  
  public xmlItems: any;  
  constructor(private _http: HttpClient) { this.loadXML(); }  
  loadXML() {  
    this._http.get('/assets/xml/exampleTable.xml',  
      {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'text'  
      })  
      .subscribe((data) => {  
        this.parseXML(data)  
          .then((data) => {  
            this.xmlItems = data;  
          });  
      });  
  }  
  parseXML(data) {  
    return new Promise(resolve => {  
      var k: string | number,  
        arr = [],  
        parser = new xml2js.Parser(  
          {  
            trim: true,  
            explicitArray: true  
          });  
      parser.parseString(data, function (err, result) {  
        var obj = result.Employee;  
        for (k in obj.emp) {  
          var item = obj.emp[k];  
          arr.push({  
            id: item.id[0],  
            name: item.name[0],  
            gender: item.gender[0],  
            mobile: item.mobile[0]  
          });  
        }  
        resolve(arr);  
      });  
    });  
  }  
  */

}
