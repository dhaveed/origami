import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { ViewInvoicesComponent } from './view-invoices/view-invoices.component';
import { ClientsComponent } from './clients/clients.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
// import { FormsModule } from '../forms/forms.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { NgxClickToEditModule } from 'ngx-click-to-edit';
import { ContenteditableDirective } from 'ng-contenteditable';


@NgModule({
  imports: [
    CommonModule,
    OfficeRoutingModule,
    // NgxClickToEditModule.forRoot()
    FormsModule
    // ReactiveFormsModule
  ],
  declarations: [ViewInvoicesComponent, ClientsComponent, NewInvoiceComponent, ContenteditableDirective]
})
export class OfficeModule { }
