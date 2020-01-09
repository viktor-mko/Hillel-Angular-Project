import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStars } from '../interface/stars';
import { IHotels } from '../interface/hotels';

@Component({
  selector: 'app-stars-filter',
  templateUrl: './stars-filter.component.html',
  styleUrls: ['./stars-filter.component.scss']
})
export class StarsFilterComponent {
  @Input()
  public starsParam: IStars[];

  @Output()
  public star: EventEmitter<number> = new EventEmitter();

  public selectHotelStars ( star: IStars ): void {
    this.star.emit(star.value);
  }

}

