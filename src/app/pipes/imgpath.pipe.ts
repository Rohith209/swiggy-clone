import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgpath',
  standalone: true
})
export class ImgpathPipe implements PipeTransform {

  transform(value: string): string {
    return "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + value;
  }

}
