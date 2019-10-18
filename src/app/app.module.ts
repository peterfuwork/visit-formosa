import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';
import { NavComponent } from './nav/nav.component';
import { TravelComponent } from './travel/travel.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './services/auth.service';

import { RestaurantService } from './services/restaurant.service';
import { LoginComponent } from './login/login.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { PostRestaurantComponent } from './post-restaurant/post-restaurant.component';

import { AuthGuard } from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    FoodComponent,
    NavComponent,
    TravelComponent,
    FooterComponent,
    LoginComponent,
    FoodDetailComponent,
    PostRestaurantComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthService,
    RestaurantService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
