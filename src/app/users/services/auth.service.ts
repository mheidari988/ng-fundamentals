import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser?: IUser

  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const authPack = { username: username, password: password };
    return this.http.post('/api/login', authPack, options)
      .pipe(catchError(err => {
        console.log(err);
        return of(false);
      }))
  }

  updateUser(firstName: string, lastName: string) {
    if (this.currentUser) {
      this.currentUser!.firstName = firstName;
      this.currentUser!.lastName = lastName;
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
