import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, of, Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Endpoints } from '../../api/Endpoints';
import { JwtService } from '../JWT/jwt.service';
import {User} from '../../../users/User'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;
  public authStatusListener = new Subject<boolean>();
  private tokenSubscription = new Subscription();
  private timeout:number;
  constructor(private http: HttpClient, private router: Router, private jwtService:JwtService) {
    this.baseUrl = environment.baseUrl;
  }

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  signIn(email: string, password: string) {
    let endpoint = this.baseUrl + Endpoints.signin;
    let data = {
      email,
      password,
    };
    this.http.post(endpoint, data).subscribe({
      next: (response: any) => {
        this.storeData(response.data.token, response.data.user);
        this.authStatusListener.next(true);
        this.router.navigate(['user-profile']);
      },
      error: (error) => {
        console.log(error);
        alert(error.error.message);
      },
    });
  }

  storeData(token: string, user: User) {
    let jwtMillis = this.jwtService.getDecodedTokenExpirationDate(token).valueOf();
    let clientMillis = new Date().valueOf()
    this.timeout = jwtMillis - clientMillis;
    this.saveToken(token);
    this.saveUser(user);
    this.expirationCounter(this.timeout);
  }

  expirationCounter(timeout:number){
    this.tokenSubscription.unsubscribe();
    this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe(()=>{
      this.logout();
    })
  }

  saveToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  get User():User {
    let user:User = JSON.parse(localStorage.getItem('user'))
    return user;
  }

  get UserId(){
    let user:User = JSON.parse(localStorage.getItem('user'))
    return user.id;
  }

  get UserRole(){
    let user:User = JSON.parse(localStorage.getItem('user'))
    return user.role;
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  isTokenExpired(token:string){
    return this.jwtService.isTokenExpired(token);
  }

  logout() {
    this.tokenSubscription.unsubscribe();
    this.authStatusListener.next(false);
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
