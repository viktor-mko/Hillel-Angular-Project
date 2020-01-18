import { Component, Input, Output } from '@angular/core';
import { IHotels } from '../interface/hotels';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.scss']
})
export class FavoriteHotelsComponent {
  @Input ()
  public favoriteHotels: IHotels[];

}
