import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.sass']
})
export class MainMapComponent implements OnInit {

  lat=41.3851;
  lon=2.1734;
  constructor() { }

  ngOnInit() {
  }

}
