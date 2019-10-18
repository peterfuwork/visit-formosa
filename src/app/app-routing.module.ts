import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodComponent } from './food/food.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { PostRestaurantComponent } from './post-restaurant/post-restaurant.component';
import { TravelComponent } from './travel/travel.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: FoodComponent},
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'food', component: FoodComponent},
  { path: 'food/:id', component: FoodDetailComponent },
  {
    path: 'post',
    component: PostRestaurantComponent,
    canActivate: [AuthGuard],
  },
  { path: 'travel', component: TravelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
