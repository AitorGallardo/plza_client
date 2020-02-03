import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

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

  events = [
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

  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  navigate(id: number){
    this.router.navigate(['event/', id]);
  }

}
