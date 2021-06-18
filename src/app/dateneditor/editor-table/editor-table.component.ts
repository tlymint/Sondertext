import { Component, OnInit } from '@angular/core';
import xml2js from 'xml2js';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  

@Component({
  selector: 'app-editor-table',
  templateUrl: './editor-table.component.html',
  styleUrls: ['./editor-table.component.scss']
})
export class EditorTableComponent{

  title = 'read-xml-angular8';  
  public xmlItems: any;  
  public tableValues = [];
  constructor(private _http: HttpClient) { this.loadXML();}  
  loadXML() {  
    this._http.get('/assets/xml/Zug- und Busnummern.xml',  
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
        var number = result.treeitem.record;
        for (var i=0;i<number.length;i++) {  
          var item = number[i];  
          arr.push({  
            name: item.$['name'],  
            Linie: item.item[0]._,  
            Kurs: item.item[1]._,  
            Ziel: item.item[2]._,
            Gruppe: item.item[3]._
          });  
        }  
        resolve(arr);  
      });  
    });  
  }  

}
