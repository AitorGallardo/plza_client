import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './events/details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
import { MainMapComponent } from './home-page/main-map/main-map.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EventsComponent,
    EventDetailsComponent,
    MainMapComponent,
    LoadingPageComponent,
    HomePageComponent,
    NavbarComponent,
    EventCreateComponent,
    FileUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC-VC074vkUxKjfBLR-PZsnkryEEBjI2rI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
