import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-blank-page',
  templateUrl: './view-invoices.component.html',
  styleUrls: ['./view-invoices.component.css']
})
export class ViewInvoicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /* $(function () {
        // Datetimepicker plugin
        $('.datetimepicker').bootstrapMaterialDatePicker({
            format: 'dddd DD MMMM YYYY - HH:mm',
            clearButton: true,
            weekStart: 1
        });

        $('.datepicker').bootstrapMaterialDatePicker({
            format: 'dddd DD MMMM YYYY',
            clearButton: true,
            weekStart: 1,
            time: false
        });
    }); */

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
