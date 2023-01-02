import { Component, OnInit } from '@angular/core'
import { AuthService } from './services/auth.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { IUser } from './models/iuser';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right;color:#E05C65;padding-left:10px;}
    .error { background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error :ms-input-placeholder { color: #999;}
  `]
})
export class ProfileComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  profileForm!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;

  ngOnInit(): void {
    let validators = [
      Validators.required,
      Validators.minLength(3)
    ];

    this.firstName = new FormControl(this.authService.currentUser?.firstName, validators);
    this.lastName = new FormControl(this.authService.currentUser?.lastName, validators);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  onCancel() {
    window.history.back();
  }

  onSaveProfile(formData: IUser) {
    if (this.profileForm.valid) {
      this.authService.updateUser(formData.firstName, formData.lastName);
      this.router.navigate(['/events']);
    }
  }

  isFirstNameValid() {
    return this.firstName.valid || this.firstName.untouched;
  }

  isLastNameValid() {
    return this.lastName.valid || this.lastName.untouched;
  }
}