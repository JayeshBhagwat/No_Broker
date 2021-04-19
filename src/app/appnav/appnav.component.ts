import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appnav',
  templateUrl: './appnav.component.html',
  styleUrls: ['./appnav.component.css']
})
export class AppnavComponent implements OnInit {
  cart = [];
  constructor(private locationsService: LocationsService, private authService: AuthService) { }
  
  ngOnInit() {
    this.locationsService.getCart().subscribe(data => {
      this.cart = [...data];
    });
  }

  logout() {
    this.authService.logout();
  }


}
