import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from './models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  API_URL = environment.api;
  eventUrl = environment.api + 'api/event/'

  currentEventId = null;

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get(this.eventUrl).pipe(
      map(res => {
        const rawEvents = <[]>res;
        const events = [];
        rawEvents.map(res => {
          
          const event = Event.create(res)
          events.push(event);
        });
        return events;
      }));
  }
  getEvent(id: string): Observable<Event> {

    const url = this.eventUrl + id;

    return this.http.get(url).pipe(
      map(res => {
        const event = Event.create(res)
        return event;
      }));
  }

  createEvent(event: Event): Observable<Event> {

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let obj: { [key: string]: any } = {};

    for (const entry of Object.entries(event)) {
      if (entry[1]) {
        if (entry[0] !== 'id' && entry[0] !== 'image') {
          obj[entry[0]] = entry[1];
        }
      }
    }

    const formData = new FormData();

    if (event.image) {
      formData.append('image', event.image);
    }

    const data = JSON.stringify(event);
    formData.append('data', data);

    console.log('formdata', formData.get('image'));
    

    return this.http.post(this.eventUrl, formData).pipe(
      map(res => {
        const event = Event.create(res)
        return event;
      }));
  }

  editEvent(event: Event): Observable<Event> {

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let obj: { [key: string]: any } = {};

    for (const entry of Object.entries(event)) {
      if (entry[1]) {
        if (entry[0] !== 'image') {
          obj[entry[0]] = entry[1];
        }
      }
    }

    const formData = new FormData();

    if (event.image) {
      formData.append('image', event.image);
    }

    const data = JSON.stringify(event);
    formData.append('data', data);

    return this.http.post(this.eventUrl, JSON.stringify(obj), {
      headers: header
    }).pipe(
      map(res => {
        const event = Event.create(res)
        return event;
      }));
  }

  deleteEvent(event: Event): Observable<any> {

    const url = this.eventUrl + event.id;

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.delete(url, {
      headers: header
    }).pipe(
      map(res => {
        return true;
      }));
  }
}
