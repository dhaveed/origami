import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { PageOfflineComponent } from './page-offline/page-offline.component';
import { LockedComponent } from './locked/locked.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ],
  declarations: [SignInComponent, SignUpComponent, ForgotPasswordComponent, Page404Component, Page500Component, PageOfflineComponent, LockedComponent]
})
export class AuthenticationModule { }
