import { Component, OnInit } from '@angular/core';
import { Jsend } from 'src/app/core/api/JSend';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { User } from '../User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  user:User;
  id:number;
  constructor(private authService:AuthService, private userService:UserService){
    this.id = Number(authService.UserId);
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
    this.userService.getUserDetails(this.id).subscribe((response:Jsend<User>)=>{
      this.user = response.data;
    })
  }

  logout(){
    this.authService.logout();
  }  
}
