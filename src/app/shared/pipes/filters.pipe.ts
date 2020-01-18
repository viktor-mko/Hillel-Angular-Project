import { Pipe, PipeTransform } from '@angular/core';
import { IHotels } from '../../app-hotels/interface/hotels';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  public transform(value: IHotels[], text: string): IHotels[] {
    if (!text) {
      return value;
    }
    return value.filter( (item: IHotels) => {
      return `${item.title}${item.description}`.toLowerCase().includes(text.toLowerCase());
    });
  }

}
