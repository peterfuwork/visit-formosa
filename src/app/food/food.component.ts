import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor(
    private restaurantService: RestaurantService
  ) {}

  restaurants = [];
  errors = '';
  ngOnInit() {

    this.restaurantService.getRestaurants()
    .subscribe(
      (data: any[]) => {
      this.restaurants = data;
    },
    (error: any) => {
      this.errors = error;
    });
  }

}
