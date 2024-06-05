import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getProductsByStoreId(storeId: string): Observable<any> {
    return this.http.get<[]>('https://run.mocky.io/v3/a754ae25-393d-4507-936a-9dbeae7f8fd4', { headers: { "Content-Type": "application/json" } });
  }
}
