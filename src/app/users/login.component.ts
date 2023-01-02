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

  constructor(private authService: AuthService, private router: Router) { }

  login(formData: NgForm) {
    this.authService.loginUser(formData.value.userName, formData.value.password);
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/events']);
    }
  }
  onCancel() {
    window.history.back();
  }
}
