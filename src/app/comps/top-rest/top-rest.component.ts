import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ImgpathPipe } from "../../pipes/imgpath.pipe";

@Component({
  selector: 'app-top-rest',
  standalone: true,
  templateUrl: './top-rest.component.html',
  styleUrl: './top-rest.component.scss',
  imports: [ImgpathPipe]
})
export class TopRestComponent implements OnInit {
  @Input() topRests: any = {};
  @Input() topRestTitle!: string;


  ngOnInit() {
    setTimeout(() => {
      this.topRests = this.topRests;
      this.topRestTitle = this.topRestTitle;
    }, 1500)
  }
}
