import { SignupComponent } from './profile/signup/signup.component';

import { LoginComponent } from './profile/login/login.component';
import { SearchComponent } from './search/search.component';

import { HomePageComponent } from './home-page/home-page.component';
import { MainMapComponent } from './home-page/main-map/main-map.component';
import { EventDetailsComponent } from './events/details/event-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupWithMailComponent } from './profile/signup/signup-with-mail/signup-with-mail.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
{
  path: '',
  component: HomePageComponent
},
{
  path: 'search',
  component: SearchComponent
},
{
  path: 'account',
  children: [
    {path: 'signup', component: SignupWithMailComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: SignupComponent, pathMatch: 'full'},
  ]
},
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]
},
{
  path: 'event',
  component: EventsComponent
},
{
  path: 'event/create',
  component: EventCreateComponent
},
{
  path: 'event/:id',
  component: EventDetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
