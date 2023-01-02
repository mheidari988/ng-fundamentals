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
