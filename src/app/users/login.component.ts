import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  password?: string;

  login(formData: NgForm) {
    console.log('passed data from form: ', formData);
  }
}
