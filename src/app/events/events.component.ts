import { EventService } from '../services/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Event } from '../models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})


export class EventsComponent implements OnInit {

  events = [];

  constructor(private router: Router, private eventService: EventService) {
    this.eventService.getAllEvents().subscribe(res => {

      this.events = res;
      console.log('ALL EVENTS', this.events);

    });
  }

  ngOnInit() {
  }
  navigate(event: Event) {
    this.eventService.currentEventId = event.id;
    this.router.navigate(['event/', event.name]);
  }
  create() {
    this.eventService.createEvent(this.events[0]).subscribe(res => {

    })
  }
  delete(id: string, event) {
    event.stopPropagation();
    this.eventService.deleteEvent(this.events[0]).subscribe(res => {
      console.log('event deleted succesfully');

    });
  }

}
