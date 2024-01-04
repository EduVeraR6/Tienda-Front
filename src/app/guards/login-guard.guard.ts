import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/loginService/login-service.service';

interface RouteData {
  roles?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {


  constructor (private loginService :LoginServiceService , private router:Router){

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.loginService.usuarioAutenticado()) {
  
      const roles = this.loginService.roles;
      const routeData = next.data as RouteData;

      if (routeData.roles && routeData.roles.some(role => roles.includes(role))) {
        return true; 
      } else {
        this.router.navigate(['403']); 
        return false;
      }
    } else {
      
      this.router.navigate(['403']);
      return false;
    }
  }
  
}
