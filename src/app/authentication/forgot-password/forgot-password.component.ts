import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-forget-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotPasswordComponent implements OnInit {

  year = (new Date()).getFullYear();
  
  constructor() { }

  ngOnInit() {
    $(".navbar-toggler").on('click',function() {
        $("html").toggleClass("nav-open");
    });
    $("body").addClass("authentication sidebar-collapse");
  }

}
