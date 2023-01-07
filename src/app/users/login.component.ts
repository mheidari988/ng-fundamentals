import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username?: string;
  password?: string;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) { }

  login(formData: NgForm) {
    this.authService.loginUser(formData.value.userName, formData.value.password)
      .subscribe(res => {
        if (!res) {
          this.loginInvalid = true;
          console.log('not logged in');
        }
        else {
          this.router.navigate(['/events']);
        }
      });
    if (this.authService.isAuthenticated()) {

    }
  }
  onCancel() {
    window.history.back();
  }
}
