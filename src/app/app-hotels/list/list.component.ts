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

  @Output() public hotel: EventEmitter<IHotels> = new EventEmitter();
  @Output() public favoriteHotel: EventEmitter<IHotels> = new EventEmitter();

  public isLoading: boolean = true;

  public odd: boolean;

  public active: boolean = false;

  public selectHotel(hotel: IHotels): void {
    console.log(hotel);
    this.hotel.emit(hotel);
  }

  public addFavorite(hotel: IHotels, event: Event): void {
    event.stopPropagation();
    console.log(hotel.phone);
    this.favoriteHotel.emit(hotel);
  }

  public ngOnInit (): void {
    setTimeout(() => this.isLoading = false, 1500);
  }

}
