import { User } from './../models/User';
import { UserService } from './../services/user.service';
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
  user: User = new User();
  returnUrl = '/';
  @ViewChild('sidenav', { static: true }) sidenav: MatDrawer;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private authService: AuthenticationService) {

                const username = this.authService.currentUserValue.username;
                
                this.userService.getUser(username).subscribe(user=>{
                  this.user = user;
                })
               }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  openCloseSidenav() {
    this.sidenav.toggle();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate([this.returnUrl]);
  }
}
