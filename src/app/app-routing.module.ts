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
  path: 'profile',
  component: ProfileComponent
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
