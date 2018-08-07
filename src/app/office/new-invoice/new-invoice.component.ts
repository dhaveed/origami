import { Component, OnInit } from '@angular/core';
declare const $: any;
declare const editableTableWidget: any;

@Component({
  selector: 'app-new-invoices',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})
export class NewInvoiceComponent implements OnInit {
  date = new Date();
  tabStep: String = "Créer une facture";
  private subtotal: number = this.getSubtotal();
  private vat: number = 0;
  

  invoiceMeta: {} = {
    notes: 'Cliquez pour ajouter des notes',
    client: 'Nom du client',
    address: 'Address',
    phone: 'Téléphone',
    date: this.date.toISOString().slice(0, 10),
    billNum: this.date.getFullYear() + "0" + this.date.getMonth() + Math.floor((Math.random() * 1000) + 1)
  }

  invoiceList:any = [
    {
      id: 1,
      title: "Nettoyage Commercial",
      desc: "simple description content",
      qty: 5,
      unit: 100,
      total: 500
    }, {
      id: 2,
      title: "Nettoyage Occasionnel",
      desc: "yet another description",
      qty: 2,
      unit: 900,
      total: 1800
    }
  ];

  constructor() { }

  private showValue($event: any): void{
    console.log($event);
  }

  private getSubtotal(): number{
    let subtotal: number = 0;
    // for(var i = 0; i <= this.invoiceList.length; i++){
    for(var i in this.invoiceList){
      console.log(i);
      console.log(this.invoiceList[i]);
      subtotal += this.invoiceList[i].qty * this.invoiceList[i].unit;
    }
    return subtotal;
  }

  private grandTotal: number = this.vat + this.getSubtotal();

  newRow(): void{
    $('#invoiceTable').editableTableWidget();
    this.invoiceList.push({
      id: this.invoiceList.length + 1,
      title: 'click to edit',
      desc: 'click to edit',
      qty: 0,
      unit: 0,
      total: 0
    });
  }

  ngOnInit() {
    //ngOnInit()
    $(function(){
      $('#invoiceTable').editableTableWidget();
    });
    
      // $('.btn-x-sm').addClass('.btn.btn-primary');
  }

}
