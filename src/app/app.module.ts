import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventsComponent } from './events/events.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
import { MainMapComponent } from './main-map/main-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EventsComponent,
    DetailsComponent,
    MainMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC-VC074vkUxKjfBLR-PZsnkryEEBjI2rI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
