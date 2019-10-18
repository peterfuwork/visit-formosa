import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {
  private readonly JWT_TOKEN = 'JWT_TOKEN';

  constructor(
    private restaurantService: RestaurantService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder)
  {}

  editForm: FormGroup;

  restaurant = Object;
  errors = '';
  id = '';
  showEditContent = false;
  isAuthenticated: Boolean;
  jwt = '';

  name_value: String;
  phone_value: String;
  address_value = String;
  image_value: String;
  description_value: String;

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      contact_restaurant_name: '',
      contact_restaurant_phone: '',
      contact_restaurant_address: '',
      intro_restaurant_desc: ''
    });

    this.id = this.route.snapshot.params['id'];
    this.restaurantService.getRestaurant(this.id)
    .subscribe(
      (data: any) => {
      this.name_value = data.acf.contact_restaurant_name;
      this.phone_value = data.acf.contact_restaurant_phone;
      this.address_value = data.acf.contact_restaurant_address;
      this.image_value = data.acf.intro_restaurant_img.sizes.medium;
      this.description_value = data.acf.intro_restaurant_desc;
    },
    (error: any) => {
      console.log(error);
      this.errors = error;
    });

    this.authService.isLoggedIn();
    console.log(this.authService.isLoggedIn());
  }


  editInfo() {
    this.showEditContent = true;
  }

  saveInfo(value) {
    console.log(value);

    this.restaurantService.updateRestaurant(
      this.id,
      {
        fields: {
          contact_restaurant_name: value.contact_restaurant_name,
          contact_restaurant_phone: value.contact_restaurant_phone,
          contact_restaurant_address: value.contact_restaurant_address,
          intro_restaurant_desc: value.intro_restaurant_desc
        }
      },
      localStorage.getItem(this.JWT_TOKEN)
    )
    .subscribe(
      (data: any) => {
        console.log('data', data);
      },
      (error: any) => {
        console.log('error', error);
        this.errors = error;
      }
    );
  }
}
