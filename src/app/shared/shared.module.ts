import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FiltersPipe } from './pipes/filters.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [FiltersPipe],
  imports: [
    CommonModule
  ],
  exports: [
    MatSliderModule,
    MatProgressSpinnerModule,
    FiltersPipe,
    MatInputModule,
    MatButtonModule
  ]
})
export class SharedModule { }
