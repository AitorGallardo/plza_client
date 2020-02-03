import { MainMapComponent } from './main-map/main-map.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';


const routes: Routes = [
{
  path: '',
  component: MainMapComponent
},
{
  path: 'events',
  component: EventsComponent
},
{
  path: 'event/:id',
  component: DetailsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
