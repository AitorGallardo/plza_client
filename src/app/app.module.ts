import { ErrorInterceptor } from './helpers/error.interceptor';
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
import { NavbarComponent } from './home-page/friends-navbar/friends-navbar.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MainbarComponent } from './mainbar/mainbar.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './profile/login/login.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { SignupComponent } from './profile/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupWithMailComponent } from './profile/signup/signup-with-mail/signup-with-mail.component';
import { ProfileGridComponent } from './profile/profile-grid/profile-grid.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfileSidenavComponent } from './profile/profile-sidenav/profile-sidenav.component';


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
    FileUploaderComponent,
    FooterbarComponent,
    MainbarComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    SignupWithMailComponent,
    ProfileGridComponent,
    ProfileSidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC-VC074vkUxKjfBLR-PZsnkryEEBjI2rI'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
