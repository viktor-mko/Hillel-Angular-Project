import { Component, Input, OnInit } from '@angular/core';
import { IHotels } from '../interface/hotels';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() public selectedHotel: IHotels;
  public constructor() { }
  public ngOnInit() {
  }

}
