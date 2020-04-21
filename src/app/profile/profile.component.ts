import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  clickk = false;
  returnUrl = '/'; 
  @ViewChild('sidenav', {static: true}) sidenav: MatDrawer;

  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  openCloseSidenav(){
    this.sidenav.toggle();
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate([this.returnUrl]);
  }
}
