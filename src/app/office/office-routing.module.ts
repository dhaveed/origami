import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewInvoicesComponent } from './view-invoices/view-invoices.component';
import { ClientsComponent } from './clients/clients.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';

const routes: Routes = [
    {
        path: 'view-invoices',
        component: ViewInvoicesComponent
    },
    {
        path: 'clients',
        component: ClientsComponent
    },
    {
        path: 'new-invoice',
        component: NewInvoiceComponent
    },
    {
        path: '',
        redirectTo: 'view-invoices',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
