import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
  declarations: [ListComponent, ProfileComponent, WeatherComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, ProfileComponent, WeatherComponent]
})
export class AppHotelsModule { }
