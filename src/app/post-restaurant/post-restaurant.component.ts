import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-restaurant',
  templateUrl: './post-restaurant.component.html',
  styleUrls: ['./post-restaurant.component.scss']
})
export class PostRestaurantComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  postForm: FormGroup;

  ngOnInit() {

    this.postForm = this.formBuilder.group({
      contact_restaurant_name: '',
      contact_restaurant_phone: '',
      contact_restaurant_address: '',
      intro_restaurant_desc: ''
    });
    
  }

  createInfo(value) {

  }

}
