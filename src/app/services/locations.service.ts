import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  _locations = [];
  _cart = [];
  locationsSub;
  cartSub;
  constructor(private http: HttpClient) {
    this.locationsSub = new BehaviorSubject<any[]>(this._locations);
    this.cartSub = new BehaviorSubject<any[]>(this._cart);
  }

  fetchLocations() {
    this.http.get<any[]>('/api/locations').subscribe(data => {
      this._locations = [...data];
      this.locationsSub.next([...this._locations]);
    });
  }

  getLocations() {
    return this.locationsSub.asObservable();
  }
  getCart() {
    return this.cartSub.asObservable();
  }
  addToCart(id) {
    const location = this.findItemInLocations(id);
    if (location.length !== 0) {
      if (this.findItemInCart(id).length) {
        this.removeFromCart(id);
      } else {
        this._cart.push(location[0]);
      }
      this.cartSub.next([...this._cart]);
    }
  }
  removeFromCart(id) {
      if (this.findItemInCart(id).length) {
        const item = this.findItemInCart(id)[0];
        const index = this._cart.indexOf(item);
        this._cart.splice(index, 1);
      }
      this.cartSub.next([...this._cart]);
  }
  clearCart() {
    this.cartSub.next([]);
}
  findItemInCart(id) {
    const item = this._cart.filter(location => location._id === id);
    return item;
  }
  findItemInLocations(id) {
    const item = this._locations.filter(location => location._id === id);
    return item;
  }
  checkout(data) {
    return this.http.post('/api/checkout', data);
  }
}
