import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.sass']
})
export class MainMapComponent implements OnInit {

  lat=41.3851;
  lon=2.1734;
  options = {
    disableDefaultUI:true
  }
  styleJsonUrl = 'assets/map_style.json'
  style = null

  constructor(private http: HttpClient) {
    this.http.get(this.styleJsonUrl).subscribe(res=> this.style =res)
   }

  ngOnInit() {
  }

}
