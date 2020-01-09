import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHotels } from '../interface/hotels';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() public hotels: IHotels[];
  @Input() public selectedHotel: IHotels;

  @Output()
  public hotel: EventEmitter<IHotels> = new EventEmitter();

  public selectHotel(hotel: IHotels): void {
    this.hotel.emit(hotel);
  }

}
