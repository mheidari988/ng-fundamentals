import { Component, OnInit } from '@angular/core'
import { AuthService } from './services/auth.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { IUser } from './models/iuser';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  profileForm!: FormGroup;

  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser?.firstName);
    let lastName = new FormControl(this.authService.currentUser?.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  onCancel() {
    window.history.back();
  }

  onSaveProfile(formData: IUser) {
    this.authService.updateUser(formData.firstName, formData.lastName);
    this.router.navigate(['/events']);
  }
}