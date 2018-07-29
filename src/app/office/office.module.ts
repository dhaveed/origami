import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficeRoutingModule } from './office-routing.module';
import { ViewInvoicesComponent } from './blank-page/view-invoices.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  imports: [
    CommonModule,
    OfficeRoutingModule
  ],
  declarations: [ViewInvoicesComponent, ClientsComponent]
})
export class OfficeModule { }
