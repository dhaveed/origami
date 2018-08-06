import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { AdminApiService } from './services/admin/admin-api.service';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth/auth.guard';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    AdminApiService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
