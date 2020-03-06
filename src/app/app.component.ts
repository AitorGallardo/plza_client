import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { BasicRequestsService } from './basic-requests.service';

const { SplashScreen } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {



  loadingPage = true;



  constructor(private apiRequestService: BasicRequestsService) {

    // Hide splash screen on mobile
    SplashScreen.hide();

    // custom splashscreen
    // setTimeout(() => {
    //   this.loadingPage = false;
    // }, 1750);

    this.apiRequestService.getAll();

  }

}
