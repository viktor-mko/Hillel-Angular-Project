import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppHotelsModule} from './app-hotels/app-hotels.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHotelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
