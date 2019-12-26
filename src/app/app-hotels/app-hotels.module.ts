import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';
import { HotelsComponent } from './hotels.component';


@NgModule({
  declarations: [ListComponent, ProfileComponent, WeatherComponent, HotelsComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, ProfileComponent, WeatherComponent, HotelsComponent]
})
export class AppHotelsModule { }
