import { Component, OnDestroy, OnInit } from '@angular/core';
import {  faRightToBracket,faUser } from '@fortawesome/free-solid-svg-icons'; 
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { NavItem } from '../NavItem';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  private authStatusSub: Subscription;  
  isAuthenticated = false;
  userRole:string;

  constructor(private authService:AuthService){
  }
  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
  }
  ngOnInit(): void {
      this.authStatusSub = this.authService.authStatusListener.subscribe(isAuthenticated=>{
      this.isAuthenticated = isAuthenticated;
      this.userRole = this.authService.UserRole;
    })
  }

  hamburgerOpen = false;
  faRightToBracket = faRightToBracket;
  faUser = faUser;

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

}