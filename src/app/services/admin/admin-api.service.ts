import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
// import {  Http, Response, HttpModule } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const API_URL = environment.adminApiUrl;
const headers = new HttpHeaders();

headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Headers', 'Origin, X-Custom-Headers');
headers.append('Access-Control-Allow-Origin', '*');
headers.append('withCredentials', 'false');

@Injectable()
export class AdminApiService {

  constructor(private http: HttpClient, private _router: Router) { }

  


  private urlFormatter(endpoint): string{
    return API_URL +  endpoint;
  }

  testHttp(endpoint){
    return this.http.get<any>(this.urlFormatter(endpoint), {headers: headers});
  }

  //check if the user is logged in
  loggedIn(): boolean{
    var retVal: boolean;
    this.http.get<any>(this.urlFormatter('auth/isli'), {headers: headers}).subscribe((res)=>{
        if(res){
          retVal = true;
        }
      }, (err) => {
        if(err){
          retVal = false;
          this.logout();
        }
      }
    );
    return retVal;
  }

  public logout(){
    let endpoint = 'auth/logout';
    this.http.get<any>(this.urlFormatter(endpoint), {headers: headers}).subscribe(()=>{
      this._router.navigate(['/authentication/sign-in']);
      return true;
    }, (err) => {
      this._router.navigate(['/authentication/sign-in']);
      return false;
    });
  }

  //log the user in
  public login(data){
    let endpoint = 'auth/login';
    return this.http.post<any>(this.urlFormatter(endpoint), data, {headers: headers});
  }
}
