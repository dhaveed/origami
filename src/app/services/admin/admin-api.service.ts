import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
// import {  Http, Response, HttpModule } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import {  HttpClient } from '@angular/common/http';

const API_URL = environment.adminApiUrl;

@Injectable()
export class AdminApiService {

  constructor(private http: HttpClient) { }

  sayHello(){
    return console.log("hello world");
  }

  private urlFormatter(endpoint): string{
    return API_URL +  endpoint;
  }

  testHttp(endpoint){
    // console.log(this.urlFormatter(endpoint));
    return this.http.get<any>(this.urlFormatter(endpoint));
  }

  loggedIn(): boolean{
    return false;
  }
}
