import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart = [];
  cartTotal = 0;
  checkoutForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    addressOne: ['', Validators.required],
    addressTwo: [''],
    country: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
  });
  constructor(private router: Router, private fb: FormBuilder, private locationsService: LocationsService) { }

  ngOnInit() {
    this.locationsService.getCart().subscribe(data => {
      this.cart = [...data];
      this.cartTotal = this.cart.reduce((acc, cur) => acc + Number(cur.price), 0);
    });
  }
  doCheckout() {
    const record = {
      ...this.checkoutForm.value,
      items: this.cart
    };
    this.locationsService.checkout(record).subscribe(res => {
      const snackbar = document.getElementById('snackbar');
      snackbar.innerHTML = 'Location booked successfully';
      snackbar.className = 'show';
      setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
        this.locationsService.clearCart();
        this.router.navigate(['/locations']);
      }, 3000);
    });
  }
}
