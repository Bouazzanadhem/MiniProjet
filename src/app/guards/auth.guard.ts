import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {}
  connecteduser = JSON.parse(localStorage.getItem("user-connected") || '[]');
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.connecteduser.length == 0 ) {
        this.router.navigateByUrl('/login')
        return false;
      } else {
        return true;
      }
  }
  
}
