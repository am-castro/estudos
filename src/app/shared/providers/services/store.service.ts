import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)
export class StoreService {
  private quantityOnCart$ = new BehaviorSubject<any>(0);

  constructor(
    private http: HttpClient
  ) {
    this.quantityOnCart$.next(this.getProductsLengthOnCart());
  }

  quantityOnCart(): Observable<number> {
    return this.quantityOnCart$.asObservable();
  }

  // TODO: Type product
  addProductOnCart(product: any): void {
    const products = this.getProductsOnCart();
    if(products && products.length > 0){
      const productExist = products.find((p: any) => p.id === product.id);
      if(productExist){
        productExist.quantity += 1;
        window.localStorage.setItem('ddl.products', JSON.stringify(products));
        this.quantityOnCart$.next(this.getProductsLengthOnCart());
      }else{
        product.quantity = 1;
        products.push(product);
        window.localStorage.setItem('ddl.products', JSON.stringify(products));
        this.quantityOnCart$.next(this.getProductsLengthOnCart());
      }
    }else{
      product.quantity = 1;
      window.localStorage.setItem('ddl.products', JSON.stringify([product]));
      this.quantityOnCart$.next(this.getProductsLengthOnCart());
    }
  }

  removeProductOnCart(product: any): void {
    const products = this.getProductsOnCart();
    if(products && products.length > 0){
      const productExist = products.find((p: any) => p.id === product.id);
      if(productExist){
        if(productExist.quantity === 1){
          const newProducts = products.filter((p: any) => p.id !== product.id);
          window.localStorage.setItem('ddl.products', JSON.stringify(newProducts));
          this.quantityOnCart$.next(this.getProductsLengthOnCart());
        }else{
          productExist.quantity -= 1;
          window.localStorage.setItem('ddl.products', JSON.stringify(products));
          this.quantityOnCart$.next(this.getProductsLengthOnCart());
        }
      }
    }
  }

  getProductsOnCart(): any[]{
    return JSON.parse(window.localStorage.getItem('ddl.products') as string) || [];
  }

  getProductsLengthOnCart(): number{
    return this.getProductsOnCart().length;
  }
  // getProducts() {
  //   return this.http.get('https://api.example.com/products');
  // }

  // getCategories() {
  //   return this.http.get('https://api.example.com/categories');
  // }

  // getCart() {
  //   return this.http.get('https://api.example.com/cart');
  // }

  // addToCart(productId: string) {
  //   return this.http.post('https://api.example.com/cart', { productId });
  // }

  // removeFromCart(productId: string) {
  //   return this.http.delete(`https://api.example.com/cart/${productId}`);
  // }

  // checkout() {
  //   return this.http.post('https://api.example.com/checkout', {});
  // }
}
