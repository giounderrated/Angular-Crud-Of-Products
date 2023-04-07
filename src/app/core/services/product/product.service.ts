import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/Product';
import { environment } from 'src/environments/environment.development';
import { Endpoints } from '../../api/Endpoints';
import { Jsend } from '../../api/JSend';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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

  getAllProducts(): Observable<Jsend<Product[]>> {
    return this.http.get<Jsend<Product[]>>(this.url + Endpoints.products, {
      headers: this.getJsonHeaders(),
    });
  }

  getProductById(id: number): Observable<Jsend<Product>> {
    return this.http.get<Jsend<Product>>(
      `${this.url}${Endpoints.products}/${id}`,
      { headers: this.getJsonHeaders() }
    );
  }

  createProduct(product: Product): Observable<Jsend<Product>> {
    return this.http.post<Jsend<Product>>(
      this.url + Endpoints.products,
      product,
      { headers: this.getJsonHeaders() }
    );
  }

  updateProduct(product: Product): Observable<Jsend<Product>> {
    return this.http.post<Jsend<Product>>(
      this.url + Endpoints.products,
      product,
      { headers: this.getJsonHeaders() }
    );
  }

  deleteProduct(id: number): Observable<Jsend<string>> {
    return this.http.delete<Jsend<string>>(
      `${this.url}${Endpoints.products}/${id}`,
      { headers: this.getJsonHeaders() }
    );
  }
}