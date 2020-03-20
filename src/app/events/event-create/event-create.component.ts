import { EventService } from 'src/app/event.service';
import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Event } from '../../models/Event';
import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.sass']
})
export class EventCreateComponent implements OnInit, AfterViewInit {

  public currentDate = null;
  form: FormGroup;

  // map vars
  map: google.maps.Map;
  lat = 41.3851;
  lon = 2.1734;
  coordinates;
  mapOptions: google.maps.MapOptions;
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;


  constructor(private formBuilder: FormBuilder, private eventService: EventService,private mapsAPILoader: MapsAPILoader) {

    // this service ensures that  Google Maps API is loaded
    this.mapsAPILoader.load().then(()=>{
      this.coordinates = new google.maps.LatLng(this.lat, this.lon);
      this.mapOptions= {
        center: this.coordinates,
        zoom: 12,
        disableDefaultUI: true
      };
    });
    this.form = this.formBuilder.group({
      name: '',
      nParticipants: '',
      date: '',
      time: ''
    });
  }

  ngOnInit() {
    this.currentDate = new Date().toISOString().slice(0, 10);
    console.log(this.currentDate);
    const date = new Date()
  }

  ngAfterViewInit() {
    this.mapInitializer();
   }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
   }

  onSubmit() {
    console.warn('Your order has been submitted', this.form.value);
    const event = new Event();
    event.name = this.form.get('name').value;
    event.maxMembers = this.form.get('nParticipants').value;
    const date = this.form.get('date').value;
    const time = this.form.get('time').value;
    event.date = this.generateDate(date, time);
    event.latitude = 43;
    event.longitude = 2;

    this.eventService.createEvent(event).subscribe(res=>{
      console.log('resultado del form',res)
    });


    this.form.reset();
  }

  generateDate(date: string, time: string) {
    const dateToArray: string[] = date.split('-');
    const year = parseInt(dateToArray[0]);
    console.log(year);
    const month = parseInt(dateToArray[1]);
    console.log(month);
    const day = parseInt(dateToArray[2]);
    console.log(day);
    const timeToArray: string[] = time.split(':');
    console.log(timeToArray);
    
    const hours = parseInt(timeToArray[0]);
    console.log(hours);
    const minutes = parseInt(timeToArray[1]);
    console.log(minutes);

    return new Date(Date.UTC(year, month, day, hours, minutes));
  }

  setMarker(lat,lon){
    let marker = new google.maps.Marker({
      position: {lat:lat,lng:lon},
      map: this.map 

    });

    marker.setMap(this.map);
  }

}
