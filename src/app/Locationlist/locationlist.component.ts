import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.css']
})
export class LocationlistComponent implements OnInit {
  locations = [];
  constructor(private locationsService: LocationsService) { }

  ngOnInit() {
    this.locationsService.fetchLocations();
    this.locationsService.getLocations().subscribe(data => {
      this.locations = [...data];
    });
  }
  addItemToCart(item) {
    this.locationsService.addToCart(item._id);
  }
  itemInCart(item) {
    return this.locationsService.findItemInCart(item._id);
  }
}
