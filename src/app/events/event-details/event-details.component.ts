import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/eventService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(
    private eventService: EventService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = Number(this.activatedRoute.snapshot.params['id']);
    this.event = this.eventService.getEventById(id);
  }

}
