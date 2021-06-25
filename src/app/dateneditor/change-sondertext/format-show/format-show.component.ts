import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-format-show',
  templateUrl: './format-show.component.html',
  styleUrls: ['./format-show.component.scss']
})
export class FormatShowComponent implements OnInit {

  sondertext: string = 'Zu dem Konzert von Udo Lindenberg fährt die U78 bereits ab 15 Uhr verstärkt bis Haltestelle "Arena / Messe Nord". Die Haltestelle "Mörikestraße" wird zwischen 15 Uhr und 16 Uhr nicht bedient.';

  constructor() { }

  ngOnInit() {
  }

}
