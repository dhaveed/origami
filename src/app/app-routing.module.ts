import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard  } from './guard/auth/auth.guard';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        // canActivate: [AuthGuard]
    },
    {
        path: 'app',
        loadChildren: 'app/app/app.module#AppModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'ecommerce',
        loadChildren: 'app/ecommerce/ecommerce.module#EcommerceModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'user-interface',
        loadChildren: 'app/user-interface/user-interface.module#UserInterfaceModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'forms',
        loadChildren: 'app/forms/forms.module#FormsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'tables',
        loadChildren: 'app/tables/tables.module#TablesModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'charts',
        loadChildren: 'app/charts/charts.module#ChartsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'widgets',
        loadChildren: 'app/widgets/widgets.module#WidgetsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'authentication',
        loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
    },
    {
        path: 'sample-pages',
        loadChildren: 'app/sample-pages/sample-pages.module#SamplePagesModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'maps',
        loadChildren: 'app/maps/maps.module#MapsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'office',
        loadChildren: 'app/office/office.module#OfficeModule',
        canActivate: [AuthGuard]
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
