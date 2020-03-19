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
  event_url = environment.api + 'api/event'

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get(this.event_url).pipe(
      map(res => {
        const rawEvents = <[]>res;
        const events = [];
        rawEvents.map(res => {
          console.log('raw0', res);
          const event = Event.create(res)
          events.push(event);
        });
        return events;
      }));
  }

  createEvent(event: Event) {

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let obj: { [key: string]: any } = {};

    for (const entry of Object.entries(event)) {
      if (entry[1]) {
        if(entry[0]!=='id' && entry[0]!=='image'){
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

    this.http.post(this.event_url, JSON.stringify(obj), {
      headers: header
    }).subscribe(data => {
      console.log('post req', data);
    });
  }
}
