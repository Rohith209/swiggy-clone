import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./comps/home/home.component";
import { RestaurantsComponent } from "./comps/restaurants/restaurants.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HomeComponent, RestaurantsComponent]
})
export class AppComponent {
  title = 'swiggy-clone';
}
