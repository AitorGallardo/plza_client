import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {

    API_URL = environment.api;
    eventUrl = environment.api + 'api/users/'

    constructor(private http: HttpClient) { }

    getUser(id: string): Observable<User> {

        const url = this.eventUrl + id;
        
        return this.http.get(url).pipe(
          map(res => {
            const user = User.create(res)
            return user;
          }));
      }
}