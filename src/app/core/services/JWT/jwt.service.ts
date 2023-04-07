import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(error) {
      return null;
    }
  }

  getDecodedTokenExpirationDate(token:string):Date{
    let decoded:any = jwt_decode(token);
    let tokenExpirationDate = decoded.exp*1000;
    return new Date(tokenExpirationDate)
  }

  isTokenExpired(token:string){
    let decoded:any = jwt_decode(token);
    let tokenExpirationDate = decoded.exp*1000;
    return Date.now()>= tokenExpirationDate;
  }
}
