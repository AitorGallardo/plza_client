import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger, state } from '@angular/animations';
@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.sass'],
  animations: [
    trigger('balloonEffect', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ])
  ]
})
export class LoadingPageComponent implements OnInit {

  currentState='initial';
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.currentState = 'final';
    }, 1);

  }

}
