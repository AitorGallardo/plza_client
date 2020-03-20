import { EventService } from 'src/app/event.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../models/Event';
import { MapsAPILoader } from '@agm/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.sass']
})
export class EventCreateComponent implements OnInit, AfterViewInit {

  public currentDate = null;
  form: FormGroup;
  submitted = false;
  // map vars
  map: google.maps.Map;
  lat = 41.3851;
  lon = 2.1734;
  coordinates;
  mapOptions: google.maps.MapOptions;
  marker: google.maps.Marker;
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;


  constructor(private formBuilder: FormBuilder, private eventService: EventService, private mapsAPILoader: MapsAPILoader) {

    // this service ensures that  Google Maps API is loaded
    this.mapsAPILoader.load().then(() => {
      this.coordinates = new google.maps.LatLng(this.lat, this.lon);
      this.mapOptions = {
        center: this.coordinates,
        zoom: 12,
        disableDefaultUI: true
      };
    });
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      nParticipants: ['', []],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.currentDate = new Date().toISOString().slice(0, 10);
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

  get f() { return this.form.controls; }

  onSubmit() {

    this.submitted = true;

    console.warn('Your order has been submitted', this.form.value);

    if (this.form.valid && this.marker) {
      const event = new Event();
      event.name = this.form.get('name').value;
      event.maxMembers = this.form.get('nParticipants').value;
      const date = this.form.get('date').value;
      const time = this.form.get('time').value;
      event.date = this.generateDate(date, time);
      event.latitude = this.marker.getPosition().lat();
      event.longitude = this.marker.getPosition().lng();

      this.eventService.createEvent(event).subscribe(res => {
        this.onReset();
      });
    } else {

    }
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }

  generateDate(date: string, time: string) {
    const dateToArray: string[] = date.split('-');
    const year = parseInt(dateToArray[0]);
    const month = parseInt(dateToArray[1])-1; // values between 0-11
    const day = parseInt(dateToArray[2]);

    const timeToArray: string[] = time.split(':');

    const hours = parseInt(timeToArray[0]);
    const minutes = parseInt(timeToArray[1]);

    return new Date(Date.UTC(year, month, day, hours, minutes));
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.map.addListener("click", (event) => {
      this.setMarker(event.latLng)

    });
  }

  setMarker(latlng) {
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      position: latlng,
      map: this.map

    });
    this.marker.setMap(this.map);
  }

}
