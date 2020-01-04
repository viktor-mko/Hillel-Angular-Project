import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';
import { HotelsComponent } from './hotels.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListComponent, ProfileComponent, WeatherComponent, HotelsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListComponent, ProfileComponent, WeatherComponent, HotelsComponent]
})
export class AppHotelsModule { }
