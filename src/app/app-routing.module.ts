import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodComponent } from './food/food.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: '', component: FoodComponent},
  { path: 'food', component: FoodComponent},
  { path: 'travel', component: TravelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
