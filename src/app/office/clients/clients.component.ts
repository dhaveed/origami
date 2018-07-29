import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.table').footable({
          'paging': {
              'enabled': true
          },
          'sorting': {
              'enabled': true
          }
      });
  }

}
