import { Injectable } from '@angular/core';
import { CanActivate, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    const token  = (this.authService.getToken() != null ? this.authService.getToken() : "" )
   
    if(this.authService.isLoggedIn){
      return true;
    }
    if(token!=""){
      if(this.authService.isTokenExpired(token)){
        alert("Tu sesion caduco");
        this.authService.logout();
        return false;
      }
    }
    this.router.navigate(['login']);
    return false;
  }
  
}
