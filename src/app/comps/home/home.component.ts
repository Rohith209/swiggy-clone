import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from '../../services/api.service';
import { RestaurantsComponent } from "../restaurants/restaurants.component";
import { async } from 'rxjs';
import { TopRestComponent } from '../top-rest/top-rest.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RestaurantsComponent, TopRestComponent]
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService) { }

  latitude: number = 14.4426;
  longitude: number = 79.9865;

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((data) => {
      this.latitude = data.coords?.latitude;
      this.longitude = data.coords?.longitude;

    }, function (err) {
      console.log("Inside Failure", err);
    });

    setTimeout(() => {
      console.log(this.latitude, this.longitude);
      this.getRestaurantsData(this.latitude, this.longitude);
    }, 10);

  }

  restaurantsData: any = [];
  topRests: any = [];
  topRestTitle!: string;
  compTitle!: string;
  getRestaurantsData = async (lat: number, lng: number) => {
    this.api.getRestaurantsData(lat, lng).subscribe(async (res: any) => {
      this.restaurantsData = await res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
      this.compTitle = await res.data.cards[2].card.card.title;
      this.topRests = await res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      this.topRestTitle = await res.data.cards[1].card.card.header?.title;
    });
  }
}
