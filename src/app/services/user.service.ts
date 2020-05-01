import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class UserService {

  API_URL = environment.api;
  userUrl = environment.api + 'api/users/'

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getUser(id: string): Observable<User> {

    const url = this.userUrl + id;

    return this.http.get(url).pipe(
      map(res => {
        const user = User.create(res)
        return user;
      }));
  }

  editUser(user: User): Observable<User> {

    const url = this.userUrl + this.authService.currentUserValue.username;

    const header = new HttpHeaders({
      'Authorization': this.authService.currentUserValue.token,
    });

    let obj: { [key: string]: any } = {};

    for (const entry of Object.entries(user)) {
      if (entry[1]) {
        if (entry[0] !== 'avatar') {
          obj[entry[0]] = entry[1];
        }
      }
    }

    const formData = new FormData();

    if (user.avatar) {
      formData.append('avatar', user.avatar);
    }

    const data = JSON.stringify(obj);
    formData.append('data', data);

    return this.http.patch(url, formData, {
      headers: header
    }).pipe(
      map(res => {
        console.log('BACKEND RES',res);
        this.authService.updateCurrentUserValue(res);
        const user = User.create(res);
        return user;
      }));
  }
}