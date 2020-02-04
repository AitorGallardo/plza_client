import { Component } from '@angular/core';
import { Plugins, SplashScreen } from '@capacitor/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {



  loadingPage = true;



  constructor() {
    SplashScreen.hide();
    setTimeout(() => {
      this.loadingPage = false;
    }, 1750);
  }

}
