import { Component, OnInit, Input } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.sass']
})
export class ProfileGridComponent implements OnInit {
  @Input() images: Array<string> = [];
  items = [];

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.items.push(true)
    }
  }

  ngOnInit() {

  }

}
