import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  

  private apiUrl = 'http://localhost:7030'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) { }

  // Method to submit restaurant choices to the backend
  submitRestaurant(choices: string): Observable<any> {
  const body = { 'name': choices };; // Assuming your backend expects an object with a 'choices' property
   
    return this.http.post(`${this.apiUrl}/api/restaurants`, body);
  }

  // Method to request a random restaurant from the backend
  getRandomRestaurant(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/api/restaurants/random`);
  }
}
