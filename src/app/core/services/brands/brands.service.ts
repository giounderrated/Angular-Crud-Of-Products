import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Brand } from 'src/app/brands/Brand';
import { environment } from 'src/environments/environment.development';
import { Jsend } from '../../api/JSend';
import { Endpoints } from '../../api/Endpoints';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  private url: string;

  constructor(public http: HttpClient) {
    this.url = environment.baseUrl;
  }

  private getJsonHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
  }

  getALlBrands(): Observable<Brand[]> {
    return this.http
      .get<Jsend<Brand[]>>(this.url + Endpoints.brands, {
        headers: this.getJsonHeaders(),
      })
      .pipe(
        map((data: Jsend<Brand[]>) => data.data)
      );
  }
}
