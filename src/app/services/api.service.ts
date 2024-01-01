import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }
  private API_BASE_URL = `https://www.swiggy.com/dapi/restaurants/list/v5`
  getRestaurantsData(latitude: number, longitude: number) {
    return this.http.get(this.API_BASE_URL + '?lat=' + latitude + '&lng=' + longitude + '&page_type=DESKTOP_WEB_LISTING')
  };
}
