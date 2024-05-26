import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { RestaurantService } from '../service/restaurant.service';
import { Router } from '@angular/router';
import { Restaurant } from '../../Shared/models/Restaurant';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css']
})
export class RestaurantListingComponent {

  public restaurantList: Restaurant[];

  ngOnInit() {
    this.getAllRestaurants();
  }

  constructor(private router: Router, private restaurantService: RestaurantService,
     private cd: ChangeDetectorRef) { }

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
        console.log('restaurantList ==> ', this.restaurantList);
      }
     
    )
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
   // this.cd.detectChanges();
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

  onButtonClick(id: number) {
    this.router.navigate(['/food-catalogue', id]);
  }


}