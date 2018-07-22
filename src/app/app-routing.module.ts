import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'app',
        loadChildren: 'app/app/app.module#AppModule'
    },
    {
        path: 'ecommerce',
        loadChildren: 'app/ecommerce/ecommerce.module#EcommerceModule'
    },
    {
        path: 'user-interface',
        loadChildren: 'app/user-interface/user-interface.module#UserInterfaceModule'
    },
    {
        path: 'forms',
        loadChildren: 'app/forms/forms.module#FormsModule'
    },
    {
        path: 'tables',
        loadChildren: 'app/tables/tables.module#TablesModule'
    },
    {
        path: 'charts',
        loadChildren: 'app/charts/charts.module#ChartsModule'
    },
    {
        path: 'widgets',
        loadChildren: 'app/widgets/widgets.module#WidgetsModule'
    },
    {
        path: 'authentication',
        loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'sample-pages',
        loadChildren: 'app/sample-pages/sample-pages.module#SamplePagesModule'
    },
    {
        path: 'maps',
        loadChildren: 'app/maps/maps.module#MapsModule'
    },
    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    // }
    {
        path: '',
        redirectTo: 'authentication/sign-in',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }