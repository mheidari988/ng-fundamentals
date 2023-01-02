import { Component } from '@angular/core'
import { AuthService } from './services/auth.service';

@Component({
  template: `
    <h1 *ngIf="authService.isAuthenticated()">
      Edit 
      {{ authService.currentUser?.firstName }} 
      {{ authService.currentUser?.lastName }}'s Profile
    </h1>
    <hr>
    <div class="col-md-6">
      <h3>[Edit profile form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default">Cancel</button>
    </div>
  `,
})
export class ProfileComponent {
  constructor(public authService: AuthService) {


  }
}