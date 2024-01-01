import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ImgpathPipe } from "../../pipes/imgpath.pipe";

@Component({
  selector: 'app-restaurants',
  standalone: true,
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.scss',
  imports: [ImgpathPipe]
})
export class RestaurantsComponent implements AfterViewInit {
  @Input() currentRestaurants: any = [];
  @Input() compTitle: any = "";
  CLOUDINARY_IMG: string = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";
  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.currentRestaurants);
      this.currentRestaurants = this.currentRestaurants;
    }, 600);
  }

}
