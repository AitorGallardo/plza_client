import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.sass']
})
export class EventDetailsComponent implements OnInit {

  image = 'assets/icons/canxa_basket.jpg';
  showDescriptionText = 'Show more';
  showMoreDescription = false;
  allEvents = [
    {
      id: 1,
      name: 'Plaza pepe',
      image: '',
      location: '',
      public: true,
      owner: '',
      description: '',
      comments: '',
      date: '23/02/2020',
      members: 8
    },
    {
      id: 2,
      name: 'Plaza pepe',
      image: '',
      location: '',
      public: true,
      owner: '',
      description: '',
      comments: '',
      date: '23/02/2020',
      members: 8
    },
    {
      id: 3,
      name: 'Plaza pepe',
      image: '',
      location: '',
      public: true,
      owner: '',
      description: '',
      comments: '',
      date: '23/02/2020',
      members: 8
    },
    {
      id: 4,
      name: 'Plaza pepe',
      image: '',
      location: '',
      public: true,
      owner: '',
      description: '',
      comments: '',
      date: '23/02/2020',
      members: 8
    },
    {
      id: 5,
      name: 'Plaza pepe',
      image: '',
      location: '',
      public: true,
      owner: '',
      description: '',
      comments: '',
      date: '23/02/2020',
      members: 8
    }
  ];

  event = null;

  constructor(private routes: ActivatedRoute, private eventService: EventService) {
  }

  ngOnInit() {
    this.routes.params.subscribe(params => {

      const id = this.eventService.currentEventId;

      this.eventService.getEvent(id).subscribe(res => {

        console.log('THISEVENT',res);
        
        this.event = res;

      })


    });
  }

  showHiddeDescriptionText() {
    this.showMoreDescription = !this.showMoreDescription
    if (this.showMoreDescription) {
      this.showDescriptionText = 'Show less'
    } else {
      this.showDescriptionText = 'Show more'
    }
  }
}
