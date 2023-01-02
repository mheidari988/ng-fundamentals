import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../models/isession';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  newSessionForm!: FormGroup;

  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }

  onSaveSession(formData: any) {
    let session: ISession = {
      id: 0,
      name: formData.name,
      presenter: formData.presenter,
      duration: +formData.duration,
      level: formData.level,
      abstract: formData.abstract,
      voters: []
    };

    console.log(session);
  }

  isInvalid(ctrl: AbstractControl<any>): boolean {
    return ctrl.invalid && ctrl.dirty;
  }

}
