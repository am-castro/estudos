import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) {}

  getPreferences() {
    return this.http.get('https://api.example.com/preferences');
  }

  getProfile() {
    return this.http.get('https://api.example.com/profile');
  }

  updateProfile(profile: any) {
    return this.http.put('https://api.example.com/profile', profile);
  }

  deleteProfile() {
    return this.http.delete('https://api.example.com/profile');
  }

  getOrders() {
    return this.http.get('https://api.example.com/orders');
  }

  getOrder(orderId: string) {
    return this.http.get(`https://api.example.com/orders/${orderId}`);
  }

  createOrder(order: any) {
    return this.http.post('https://api.example.com/orders', order);
  }

  updateOrder(orderId: string, order: any) {
    return this.http.put(`https://api.example.com/orders/${orderId}`, order);
  }

  deleteOrder(orderId: string) {
    return this.http.delete(`https://api.example.com/orders/${orderId}`);
  }

  getAddress(addressId: string) {
    return this.http.get(`https://api.example.com/addresses/${addressId}`);
  }
}
