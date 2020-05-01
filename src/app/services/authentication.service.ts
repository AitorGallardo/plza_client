import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    API_URL = environment.api;
    authUrl = environment.api + 'auth/'

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    public updateCurrentUserValue(user) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const updatedUser = {
            ...currentUser,
            ...user
        }
        console.log('updatedUser',updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        this.currentUserSubject.next(updatedUser);  
    }

    signup(username: string, password: string) {
        const url = this.authUrl + 'signup/';

        return this.http.post(url, { username, password })
            .pipe(map((res: any) => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                const user = User.create(res.response)
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    login(username: string, password: string) {
        const url = this.authUrl + 'login/';

        return this.http.post(url, { username, password })
            .pipe(map((res: any) => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                const user = User.create(res.response)
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}