import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  clickk = false;
  @ViewChild('sidenav', {static: true}) sidenav: MatDrawer;

  constructor() { }

  ngOnInit() {
  }

  openCloseSidenav(){
    this.sidenav.toggle();
  }

}
