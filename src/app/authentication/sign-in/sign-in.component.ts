import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdminApiService } from '../../services/admin/admin-api.service';
import { Router } from '@angular/router';

declare const $: any;
declare const swal: any;

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

  public feedbackMsg: string;

  private flag;

  constructor(private _authService:AdminApiService, private _router: Router) {
    // this.flag = 0;
  }

  doLogon(f){
    $('div#loading').show();
    this._authService.login(f).subscribe(
      (res) => {
        //try to write a function to get and store token later
        if(res){
            this.feedbackMsg = res.data.message;
            $('div#loading').hide();
            this._router.navigate(['/dashboard/main']);
            this.showSuccessMessage('Success', this.feedbackMsg + " You will be redirected shortly.");            
        }
      }, (err) => {
        var error = err.error;
        if(error.meta.status == 401){
          this.feedbackMsg = error.data.message;
          $('div#loading').hide();
          this.showErrorMessage('Error', this.feedbackMsg + " Please try again.");
        }
      }
    )
  }

  private showSuccessMessage(title, m) {
    swal(title, m, 'success');
  }

  private showErrorMessage(title, m) {
    swal(title, m, 'error');
  }

  /* private showLoader(){
    $('#loading').hide();
  }
  private hideLoader(){
    $('#loading').show();
  } */
    

  ngOnInit() {
    // this.hideLoader();
    $('div#loading').hide();
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
