import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.sass']
})
export class EventDetailsComponent implements OnInit {

  allEvents = [
    {
      id: 1,
      name: 'Plaza pepe',
      date: '23/02/2020',
      participants: 8
    },
    {
      id: 2,
      name: 'Plaza pepe',
      date: '23/02/2020',
      participants: 8
    },
    {
      id: 3,
      name: 'Plaza pepe',
      date: '23/02/2020',
      participants: 8
    },
    {
      id: 4,
      name: 'Plaza pepe',
      date: '23/02/2020',
      participants: 8
    },
    {
      id: 5,
      name: 'Plaza pepe',
      date: '23/02/2020',
      participants: 8
    },
  ];

  event=null;

  constructor(private routes: ActivatedRoute) {

   }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      const id = params['id'];
      this.event = this.allEvents.filter(event=> event.id==id)[0];
    });
  }

}
