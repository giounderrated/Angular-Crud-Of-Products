import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/User';
import { Endpoints } from '../../api/Endpoints';
import { Jsend } from '../../api/JSend';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserDetails(id: number):Observable<Jsend<User>> {
    return this.http.get<Jsend<User>>(Endpoints.host + Endpoints.user_details+"/"+id);
  }
}
