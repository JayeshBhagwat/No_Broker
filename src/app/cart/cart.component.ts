import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];
  cartTotal = 0;
  constructor(private locationsService: LocationsService) { }

  ngOnInit() {
    this.locationsService.getCart().subscribe(data => {
      this.cart = [...data];
      this.cartTotal = this.cart.reduce((acc, cur) => acc + Number(cur.price), 0);
    });
  }
  removeItemFromCart(item) {
    this.locationsService.removeFromCart(item._id);
  }
}
