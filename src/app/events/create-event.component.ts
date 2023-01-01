import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  template: `
    <h1></h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create event form will go here]</h3>
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary">
        Save
      </button>
      <button type="submit" class="btn btn-default" (click)="onCancelClick()">
        Cancel
      </button>
    </div>
  `,
  styles: [
  ]
})
export class CreateEventComponent {

  isDirtyState = true;

  constructor(private router: Router) {
  }

  onCancelClick() {
    this.router.navigate(['/events']);
  }
}
