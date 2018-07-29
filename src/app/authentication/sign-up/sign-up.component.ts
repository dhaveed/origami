import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {

  year = (new Date()).getFullYear();

  constructor() { }

  ngOnInit() {
    $(".navbar-toggler").on('click',function() {
        $("html").toggleClass("nav-open");
    });
    $("body").addClass("authentication sidebar-collapse");
  }

}
