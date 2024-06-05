import type { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {

  constructor(
    private _service: ProductsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | any {
    if(route.queryParams['sid']){
      return this._service.getProductsByStoreId(route.queryParams['sid']);
    }else{
      return this._service.getProductsByStoreId(route.queryParams['pid']);
    }
  }
  
}
