import { Component } from '@angular/core';
import { Plugins} from '@capacitor/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {



  loadingPage = true;



  constructor() {
    
  // custom splashscreen
    setTimeout(() => {
      this.loadingPage = false;
    }, 1750);
  }

}
