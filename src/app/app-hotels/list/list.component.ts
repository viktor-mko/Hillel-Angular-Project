import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotels } from '../interface/hotels';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() public hotels: IHotels[];
  @Input() public selectedHotel: IHotels;

  @Output()
  public hotel: EventEmitter<IHotels> = new EventEmitter();

  public constructor() {
  }

  public ngOnInit() {
  }

  public selectHotel(hotel: IHotels): void {
    this.hotel.emit(hotel);
    console.log(hotel);
  }

}
