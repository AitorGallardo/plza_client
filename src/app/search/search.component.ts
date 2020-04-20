import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Event } from '../models/Event';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
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
export class SearchComponent implements OnInit {
  events = [];
  isSearching = false;

  @ViewChild('searchInput', {static: true}) searchInput:ElementRef;

  constructor(private router: Router, private eventService: EventService) {
    this.eventService.getAllEvents().subscribe(res => {

      this.events = res;
      console.log('ALL EVENTS', this.events);

    });
  }
  navigate(event: Event) {
    this.eventService.currentEventId = event.id;
    this.router.navigate(['event/', event.name]);
  }

  cancelSearching(){
    this.isSearching = false
    this.searchInput.nativeElement.value = '';
  }

  ngOnInit() {
  }

}
