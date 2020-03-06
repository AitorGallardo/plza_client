import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicRequestsService {

  url = environment.api;

  constructor(private http: HttpClient) { }


  getAll() {
    this.http.get(this.url).subscribe(res=>{
      console.log(res)
    });
  }

}
