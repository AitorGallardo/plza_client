import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.sass']
})
export class ProfileGridComponent implements OnInit {

  items = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.items.push(true)
    }
  }

  ngOnInit() {
  }

}
