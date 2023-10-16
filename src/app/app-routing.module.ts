import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantRandomizerComponent} from './restaurant-randomizer/restaurant-randomizer.component'


const routes: Routes = [
  { path: 'restaurant-randomizer', component: RestaurantRandomizerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
