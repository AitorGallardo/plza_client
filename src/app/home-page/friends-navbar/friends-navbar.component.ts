import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-navbar',
  templateUrl: './friends-navbar.component.html',
  styleUrls: ['./friends-navbar.component.sass']
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
    {
      name: 'aitorturito',
      image: 'assets/icons/turito_profile.jpg'
    },
    {
      name: 'aitorturito',
      image: 'assets/icons/turito_profile.jpg'
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
