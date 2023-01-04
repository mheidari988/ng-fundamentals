import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/eventService';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent } from '../models/ievent';
import { ISession } from '../models/isession';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event?: IEvent;
  addMode = false;
  filterBy: string = 'all';
  sortBy: string = 'name';

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.forEach((params: Params) => {
      this.event = this.eventService.getEventById(+params['id']);
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  onCreateSessionCanceled() {
    this.addMode = false;
  }
  onSessionCreated(session: ISession) {
    if (!this.event) {
      return;
    }

    const newId = Math.max.apply(null, this.event!.sessions.map(x => x.id));
    session.id = newId + 1;
    this.event!.sessions.push(session);

    this.addMode = false;
  }
}
