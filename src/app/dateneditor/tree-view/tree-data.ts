import { Component, Injectable } from '@angular/core';
import { of as ofObservable, Observable, BehaviorSubject } from 'rxjs';

export class TreeItem {
  children?: TreeItem[];
  name: string;
}

export class TreeItemFlat {
  name: string;
  level: number;
  expandable: boolean;
}


const TREE_DATA = {
  'Administration': {
    'Allgemeine Einstellungen': null,
    'Benutzerrollen': {
        'Neu': null,
        'Admin':null,
        'Bahnhofsbeobachter':null,
        'BBR-Admin':null,
        'Bedienplatz':null,
        'Bereichsrecher':null,
        'BR-Wartung':null,
        'Disponent-Messe':null,
        'DyFaAdmin':null,
        'ELA-Video':null,
        'Schaltwart':null,
        'Solldatenrechner':null,
        'Testumgebung_Bedienplatz':null,
        'Testumgebung_Bereichsrechner':null,
        'Testumgebung_Solldatensatz':null,
        'Testumgebung_Zentralrechner':null,
        'Textersteller':null,
        'Zentralrechner':null,
    },
    'Kommunikation': {
      'Netzwerkverbindungen':null,
      'Rechner-Adressen':null,
      'Serielle Verbindungen':null,
    },
    'Betriebstagebuch':null
  },
  'Betriebstagebuch': {
    'Qualitätsreporting': null,
    'Statistuik': {
        'DyFa-BR': null,
        'DyFa-ZR':null,
    },
    'Systemmeldungen 18.06.21': {

    },
  },
  'DYFA-Gruppen': {
    '*Neu': null,
    'ALLE': null,
    'Alle 2-Zeiler Strab': null,
    'Alle 3-Zeiler Strab': null,
    'Alle 4-Zeiler Strabbahn': null,
    'Alle 4-Zeiler Strab': null,
    'Alle 8-Zeiler Strabbahn': null,
    'Alle 8-Zeiler Strab': null,
    'Alle Bus': null,
    'AMN': null,
    'AMN AB1 MB1': null,
    'AMN AB1+2 MB1+2': null,
    'AMN AB2': null,
    'AMN AB2 MB2': null,
    'AMN AB2+4 MB2+4': null,
    'AMN AB4': null,
    'AMN AB4 MB4': null,
    'AMN AP+MK+Z': null,

  },
  'DYFA-Gruppen: Evakuierung':{
    '*Neu': null,
    '010:':'U-Bahn_Komplett',
    '020:':'U-Bahn_Hochflurtunnel',
    '030:':'U-Bahn_Niederflurtunnel',
  },
  'Fahrpläne':{
    'Tages-Fahrplan':{
      'ZAK-Masken':null,
      'SOT-Masken':null,
      'ZZA-Masken':null,
      'MAM-Masken':null,
    }
  },
  'Sondertexte': {
    'Arena / Messe Nord - diverse Spezialtexte für Messen und Veranstaltungen (deutsch, englisch)':{
      'arena-Anfahrten':{
        '461:':'Zu dem Konzert von Udo Lindenberg fährt die U78 bereits ab 15 Uhr verstärkt bis Haltestelle "Arena / Messe Nord". Die Haltestelle "Mörikestraße" wird zwischen 15 Uhr und 16 Uhr nicht bedient.',
        '462:':'Train to concert "BON JOVI" is U78 to stop "Arena / Messe Nord".',
        '796:':'Sie erreichen das Konzert "TAKE THAT" mit der U78 bis Haltestelle "Arena / Messe Nord".',
        '797:':'Train to concert "TAKE THAT" is U78 to stop "Arena / Messe Nord".',
        '798:':'Sie erreichen das Konzert "TAKE THAT" mit der U79 bis Haltestelle "Messe Ost/Stockumer Kirchstraße". Wechseln Sie zum Bahnsteig gegenüber und fahren Sie mit der U78 bis "Arena / Messe Nord".',
        '799:':'Train to TAKE THAT can be reached by U79 to the station "Messe Ost/Stockumer Kirchstraße". Go to the opposite platform and take the U78 to "Arena / Messe Nord".'
      },
      'Messe Absagen':{
        '1534:':'Die Messen "METAV" und "Energy Storage Europe" wurden auf unbestimmte Zeit verschoben. Nähere Informationen unter www.messe-duesseldorf.de',
        '1535:':'The "METAV" and "Energy Storage Europe" fairs have been postponed indefinitely. More information at: www.messe-duesseldorf.de',
        '1536:':'Die Messe "Pro Wein" wurde verschoben. Neuer Termin: 21. März bis 23. März 2021. Nähere Informationen unter www.messe-duesseldorf.de',
        '1537:':'The "Pro Wein" fair have been postponed. New appointment: 21.03. - 23.03.2021. More information at: www.messe-duesseldorf.de',
        '1538:':'Die Messen "wire" und "Tube wurden verschoben. Neuer Termin: 07. bis 11. Dezember 2020. Nähere Informationen unter www.messe-duesseldorf.de',
        '1539:':'The fairs "wire" and "Tube" have been postponed to 7th - 11th of December 2020. More information: www.messe-duesseldorf.de',
        '1540:':'Die Messe "Flotte! Der Branchentreff" wurde verschoben. Neuer Termin: 27. bis 28. Mai 2020. Nähere Informationen unter www.messe-duesseldorf.de',
        '1541:':'The fair "Flotte! Der Branchentreff" has been postponed to 27th - 28th of May 2020. More information: www.messe-duesseldorf.de',
      },
      'Messeanfahrten U78 (de, en)':{

      },
      'Messeanfahrten U79 aus DU (de, en)':{
        'Standard Hinweis Nord (de, en)':{
          'Architect@Work':{},
          'BEAUTY':{},
          'Chefs Culinar':{},
          'METAV + Energy Storage':{},
          'PSI':{},
          'REHACare':{},
        },
        'Standard Hinweis Nord und Ost (de, en)':{
          'Aluminium':{},
          'BEAUTY':{},
          'Beauty + Hair':{},
          'glasstec':{},
          'MEDICA':{},
          'METAV':{},
          'ProWein':{},
          'PSI':{},
        },
        'Standard Hinweis Nord und Süd (de, en)':{
          'A+A':{},
          'BEAUTY':{},
          'BEAUTY+ProWein':{},
          'GDS':{},
          'ProWein':{},
          'ProWein+Energy Storage':{},
          'REHACare':{},
        },
        'Standard Hinweis Nord, Ost und Süd (de, en)':{
          'Architect@Work':{},
          'BEAUTY':{},
          'Chefs Culinar':{},
          'METAV + Energy Storage':{},
          'PSI':{},
          'REHACare':{},
        },
        'Standard Hinweis Ost (de, en)':{
          'Architect@Work':{},
          'BEAUTY':{},
          'Chefs Culinar':{},
          'METAV + Energy Storage':{},
          'PSI':{},
          'REHACare':{},
        },
        'Standard Hinweis Ost und Süd (de, en)':{
          'Architect@Work':{},
          'BEAUTY':{},
          'Chefs Culinar':{},
          'METAV + Energy Storage':{},
          'PSI':{},
          'REHACare':{},
        },
        'Standard Hinweis Süd (de, en)':{
          'Architect@Work':{},
          'BEAUTY':{},
          'Chefs Culinar':{},
          'METAV + Energy Storage':{},
          'PSI':{},
          'REHACare':{},
        }
      },
      'Sportpark Nord/Europaplatz (de, en)':{
        '523:':'Kein Einstieg an dieser Haltestelle. Züge in Richtung Düsseldorf Innenstadt fahren ab Haltestelle "Arena / Messe Nord". No Entrance at this stop. Trains via Düsseldorf City leave at "Arena / Messe Nord".'
      }
    },
    'Arena / Messe Nord - MAM-Betriebsfälle 1 bis 5':null,
    'Corona Texte':null,
    'Evakuierung': {
      'MAM':null,
      'ZZA':null,
      'Test':null,
      'Grundbilder':null,
    },
    'Fahrplanwechsel':{

    },
    'Freibäder':{

    },
    'Fußball Arena':{

    },
    'Grundtexte und Rückfalltexte':{

    },
    'Infoplatz':{

    },
    'Ständige Sondertexte':{

    },
    'Test und Wartung Technik':{

    },
    'Umleitungen, geplante Sperrungen, Veranstaltungen und Informationen':{

    },
    'ZZA-Texte':{

    },


  },
  'Grafikdaten':{
    'Ansichten':null,
    'Farben':null,
    'Layer':{
      'MAM-Anlage':null,
      'Evakuierung':null,
      'CMS-Aufträge':null,
      'Ausblenden von Linien':null,
    },
    'Zoomstufen':null,
  },
  'Projektierung':{
    'Zug- und Busnummern':null,
    'Anzeigerbereiche (VRR)':null,
    'Automatische EH-Löschung':null,
    'Bahnsteigabschnittsanzeige':{

    },
    'CMS-Liniennummer':null,
    'Displayvorlage':{

    },
    'Fahrgastwechselzeiten':null,
    'Fahrzeuggruppen':null,
    'Feinziel nach Grobziel':null,
    'Gleisgenaue Abfahrtprognose':null,
    'Haltestellen-Nummern ITCS->DyFa':null,
    'Kopplung von Anzeigern':null,
    'Kurzwenden ignorieren':null,
    'Linientext-Zuordnung':null,
    'Linienwege':{

    },
    'Mofis-Objekte':{

    },
    'NLT-Fehlermeldungen':null,
    'Sonderfälle':{

    },
    
    'Sonderfälle Wendezeiten':null,
    'Trennung von Bus und Bahnlinien':null,
    'Verteilen von Dyfa-Zeilen':null,
    'Zieltexte':{

    },
    'Zuglenk-Rechner':{

    },
  },
  'Reisezeitlisten':{
  },
  'Auftragsverwaltungen':{ 
    '1':'Benutzerdefinierte Aufträge',
    '2':'Ständige Aufträge',
    '3':'Grundbilder',
    'MAM':{    
      '1':'MAM Normal',
      '2':'MAM Messe',
      '3':'MAM Arena',
      '4':'MAM Arena + Messe',
      '5':'MAM Wendeschleife gestört',
      '6':'MAM Normal mit U79',
      '7':'MAM Messe mit U79',
      '8':'MAM Arena mit U79',
      '9':'MAM Arena + Messe mit U79',
      '10':'MAM Wendeschleife gestört mit U79',
    },
    '4':'CMS Aufträge',
    '5':'Ausblenden von Linien',
    'Evakuierungmaßnahmen':{
      '1':'Aktuelle Evakuierungmaßnahmen',
      '2':'Vorlage Evakuierungmaßnahmen',
    },
    '6':'Fahrplananzeige (Notfallmodus)',
  },
  'Displayeditor':{
    'Gruppe 001 ZAK-Masken':{
      '1':'004::6Z: ZAK',
      '2':'008::4Z: PAS mit Kopf (bereiteres Linienfeld)',
      '3':'010::11Z: PAS mit Kopf',
      '4':'014::4Z: PAS mit Kopf',
      '5':'024::4Z: ZAK',
      '6':'026::6Z: PAS mit Kopf',
      '7':'031::2Z: ZAK',
      '8':'036::9Z: ZAK',
      '9':'041::8Z: ZAK',
      '10':'044::4ZL: ZAK',
      '11':'050::9Z: PAS Mini-Dyfa',
      '12':'053::4Z: ZAK',
      '13':'063::4Z XL: 2Z Info + 2Z ZAK',
      '14':'064::4Z XL: ZAK',
      '15':'068::3Z: PAS mit Kopf',
      '16':'080::8Z: PAS mit Kopf',
      '17':'081::8Z: PAS',
      '18':'083::4Z: PAS',
      '19':'085::4Z: PAS HIS Vorplatz',
      
    },
    'Gruppe 002 SOT AMN':{
    },
    'Gruppe 003 SOT AMN':{
    },
    'Gruppe 004 SOT AMN':{
    },
    'Gruppe 005 SOT AMN':{
    },
    'Gruppe 006 SOT AMN':{
    },
    'Gruppe 007 SOT AMN':{
    },
    'Gruppe 008 SOT AMN':{
    },
    'Gruppe 009 SOT AMN':{
    },
    'Gruppe 010 SOT AMN':{
    },
    'Gruppe 011 SOT AMN':{
    },
    'Gruppe 012 SOT AMN':{
    },
    'Gruppe 013 SOT AMN':{
    },
    'Gruppe 014 SOT AMN':{
    },
    'Gruppe 049 SOT AMN':{
    }
  }


}


@Injectable()
export class ChecklistDatabase {
  dataChange: BehaviorSubject<TreeItem[]> = new BehaviorSubject<TreeItem[]>([]);
  parentNodeMap = new Map<TreeItemFlat, TreeItem>();

  get data(): TreeItem[] { return this.dataChange.value; }

  constructor() {
    this.initialize();
  }

  initialize() {
    // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
    //     file node as children.
    const data = this.buildFileTree(TREE_DATA, 0);

    // Notify the change.
    this.dataChange.next(data);
  }

   /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `TodoItemNode`.
   */
    buildFileTree(value: any, level: number) {
      let data: any[] = [];
      for (let k in value) {
        let v = value[k];
        let node = new TreeItem();
        node.name = `${k}`;
        if (v === null || v === undefined) {
          // no action
        } else if (typeof v === 'object') {
          node.children = this.buildFileTree(v, level + 1);
        } else {
          node.name = v;
        }
        data.push(node);
      }
      return data;
  }

  /**add a root-node to treeitem */
  addRoot(name: string){
    const dataNode = new TreeItem[name];
  }

    /** Add an item to treeitem */
  insertItem(parent: TreeItem, name: string) {
    const child = <TreeItem>{ name: name };
    if (parent.children) { // parent already has children
      parent.children.push(child);
      this.dataChange.next(this.data);
    }
    else { // if parent is a leaf node
      parent.children = [];
      parent.children.push(child);
      this.dataChange.next(this.data);
    }
  }

  findParent(id: number, node: any): any {

    console.log("id " + id + " node" + node.id);
    if (node != undefined && node.id === id) {
      return node;
    } else {
      console.log("ELSE " + JSON.stringify(node.children));
      for (let element in node.children) {
        console.log("Recursive " + JSON.stringify(node.children[element].children));
        if (node.children[element].children != undefined && node.children[element].children.length > 0) {
          return this.findParent(id, node.children[element]);
        } else {
          continue;
        }


      }

    }
  }

  deleteItem(parent: TreeItem, name: string){
    if (parent.children) {
      parent.children = parent.children.filter(c => c.name !== name);
      this.dataChange.next(this.data);
    }

  }

  updateItem(node: TreeItem, name: string) {
    node.name = name;
    this.dataChange.next(this.data);
  }
}