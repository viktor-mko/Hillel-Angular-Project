import { Component, Input, OnInit } from '@angular/core';
import { IHotels } from '../interface/hotels';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() public selectedHotel: IHotels;

  public constructor() { }

  public ngOnInit() {
  }

}
