import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IEvent } from './models/ievent';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styles: [`
    em {float:right;color:#E05C65;padding-left:10px;}
    .error { background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999;}
    .error ::-moz-placeholder { color: #999;}
    .error :-moz-placeholder { color: #999;}
    .error :ms-input-placeholder { color: #999;}
  `]
})
export class CreateEventComponent implements OnInit {

  newEvent?: IEvent;
  isDirtyState = false;

  constructor(private router: Router) {
  }
  ngOnInit(): void {

  }

  saveEvent(formData: NgForm) {
    console.log(formData);
  }
  onCancelClick() {
    this.router.navigate(['/events']);
  }
}
