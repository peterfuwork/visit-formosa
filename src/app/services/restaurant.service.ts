import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {

    constructor(
      private httpClient: HttpClient
    ) {}

    getRestaurants() {
        return this.httpClient.get(`${config.apiUrl}/wp-json/acf/v3/restaurant`);
    }

    getRestaurant(id: string) {
      return this.httpClient.get(`${config.apiUrl}/wp-json/acf/v3/restaurant/${id}`);
    }

    updateRestaurant(id: string, updateInfo: Object, jwt: String) {
      const json = JSON.stringify(updateInfo);

      const httpHeaders = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`
        }
      );
      return this.httpClient.put(
        `${config.apiUrl}/wp-json/acf/v3/restaurant/${id}`,
        json,
        { headers: httpHeaders }
      );
    }

}
