import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-new-invoices',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {
  
  // notes: String = "Click to add notes";
  date = new Date();

  invoiceMeta: {} = {
    notes: 'Click to add notes',
    client: 'Nom du client',
    address: 'Address',
    phone: 'Phone',
    // date: this.date.getMonth() + " " + this.date.getDay() + ', ' + this.date.getFullYear()
    date: this.date.toISOString().slice(0, 10),
    billNum: this.date.getFullYear() + "0" + this.date.getMonth() + Math.floor((Math.random() * 1000) + 1)
  }

  constructor() { }

  private showValue($event: any): void{
    console.log($event);
  }

  ngOnInit() {
    //ngOnInit()
    
      $('.btn-x-sm').addClass('.btn.btn-primary');
  }

}
