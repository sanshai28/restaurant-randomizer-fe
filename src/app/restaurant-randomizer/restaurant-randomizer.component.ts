import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';  

@Component({
  selector: 'app-restaurant-randomizer',
  templateUrl: './restaurant-randomizer.component.html',
  styleUrls: ['./restaurant-randomizer.component.css']
})


export class RestaurantRandomizerComponent implements OnInit {

  restaurantName: string = '';
  randomRestaurant: string = '';

  constructor(private restaurantService: RestaurantService) { }

  submitRestaurant(): void {
    // Call the backend API to submit the restaurant name
    // You can implement this functionality in your RestaurantService
    this.restaurantService.submitRestaurant(this.restaurantName)
      .subscribe((response:any) => {
        console.log('Restaurant submitted successfully.');
        this.showSuccessAlert(response);
      });
  }
  private showSuccessAlert(result:any): void {
    alert(result.name +" Restaurant added successfully.");
    // or use a more user-friendly alert, e.g., Bootstrap modal or Toastr
  }

  getRandomRestaurant(): void {
    this.restaurantService.getRandomRestaurant()
      .subscribe((response: any) => {
        if (response && response.name) {
          this.randomRestaurant = response.name;
          // You can update the UI or perform additional actions here
        }
      });
  }

  ngOnInit(): void {
  }

}
