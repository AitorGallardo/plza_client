import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { SplashScreen } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {



  loadingPage = true;



  constructor() {

    // Hide splash screen on mobile
    SplashScreen.hide();

    // custom splashscreen
    // setTimeout(() => {
    //   this.loadingPage = false;
    // }, 1750);

  }

}
