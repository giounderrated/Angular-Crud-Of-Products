import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from 'src/app/categories/Category';
import { environment } from 'src/environments/environment.development';
import { Endpoints } from '../../api/Endpoints';
import { Jsend } from '../../api/JSend';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
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

  getAllCategories(): Observable<Category[]> {
    return this.http
      .get<Jsend<Category[]>>(this.url + Endpoints.categories, {
        headers: this.getJsonHeaders(),
      })
      .pipe(map((data: Jsend<Category[]>) => data.data));
  }
}
