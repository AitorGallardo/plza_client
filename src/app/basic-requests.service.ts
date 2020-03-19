import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicRequestsService {

  API_URL = environment.api;
  event_url = '/api/event'

  constructor(private http: HttpClient) { }


  getAll() {
    this.http.get(this.API_URL).subscribe(res=>{
      console.log('QUE ME DAS', res)
    });
  }

}
