import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { AdminApiService  } from './../../services/admin/admin-api.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AdminApiService, private _router: Router){

  }
  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  } */

  canActivate(): boolean{
    if(this._authService.loggedIn()){
      return true;
    } else {
      // return false;
      this._router.navigate(['/authentication/sign-in']);
    }
  }


}
