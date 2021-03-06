import { Component, OnInit, Renderer2 } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import { AdminApiService } from './services/admin/admin-api.service';

declare const $: any;
declare const jquery: any;
declare const screenfull: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    previousUrl: string;

    

    constructor(private renderer: Renderer2, private router: Router, private _authService:AdminApiService) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    if (this.previousUrl) {
                        this.renderer.removeClass(document.body, this.previousUrl);
                    }
                    const currentUrl = event.url.split('/');
                    const currentUrlSlug = currentUrl[currentUrl.length - 1];
                    if (currentUrlSlug) {
                        this.renderer.addClass(document.body, currentUrlSlug);
                    }

                    if(currentUrlSlug == ''){
                        this.previousUrl = 'sign-in'
                    } else {
                        this.previousUrl = currentUrlSlug;
                    }
                    
                    // this.previousUrl = (currentUrlSlug != "") ? currentUrlSlug : 'sign-in';
                    // this.previousUrl = currentUrlSlug;
                    // this.previousUrl = 'sign-in';
                }
            });
    }

    logout(){
        this._authService.logout();
    }

    ngOnInit() {
        // this.previousUrl = "sign-in";
        // ========
        
        $('.theme-light-dark .t-light').on('click', function() {
            $('body').removeClass('menu_dark');
        });

        $('.theme-light-dark .t-dark').on('click', function() {
            $('body').addClass('menu_dark');
        });

        $('.m_img_btn').on('click', function() {
            $('body').toggleClass('menu_img');
        });

        $('.boxs-close').on('click', function(){
            const element = $(this);
            const cards = element.parents('.card');
            cards.addClass('closed').fadeOut();
        });

    }
}
