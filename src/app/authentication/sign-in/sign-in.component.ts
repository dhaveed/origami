import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminApiService } from '../../services/admin/admin-api.service';

declare const $: any;

@Component({
  selector: 'app-sing-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {

  year = (new Date()).getFullYear();

  public login: any = {
    email: '',
    password: ''
  };

  constructor(private _authService:AdminApiService) {
    this._authService.testHttp("testing").subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  /* doLogon(f: NgForm){
    console.log(f.value);
  } */

  /* onSubmit() {
    if (this.user.valid) {
      console.log("Form Submitted!");
    }
  } */

  ngOnInit() {
    $("body").addClass("authentication sidebar-collapse");
    $(".navbar-toggler").on('click',function() {
      $("html").toggleClass("nav-open");
    });

    $('.form-control').on("focus", function() {
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function() {
        $(this).parent(".input-group").removeClass("input-group-focus");
    });
  }

}
