import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  friendList = [
    {
      name: 'carliuas',
      image: 'assets/icons/carliuas_profile.jpg'
    },
    {
      name: 'sergihcc',
      image: 'assets/icons/horta_profile.jpg'
    },
    {
      name: 'davidjuanola7',
      image: 'assets/icons/juanola_profile.jpg'
    },
    {
      name: 'aitorturito',
      image: 'assets/icons/turito_profile.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
