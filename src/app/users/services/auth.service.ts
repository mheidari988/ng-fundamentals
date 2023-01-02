import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser?: IUser

  constructor() { }

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'Reza',
      lastName: 'Heidari'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
