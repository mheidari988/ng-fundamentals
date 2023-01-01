import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/eventService';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../models/ievent';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event?: IEvent;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.params['id']);
    this.event = this.eventService.getEventById(id);
  }

}
