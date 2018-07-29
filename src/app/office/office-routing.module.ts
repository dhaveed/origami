import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewInvoicesComponent } from './blank-page/view-invoices.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
    {
        path: 'view-invoices',
        component: ViewInvoicesComponent
    },
    {
        path: 'clients',
        component:ClientsComponent
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
