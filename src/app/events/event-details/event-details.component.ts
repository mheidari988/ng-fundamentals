import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/eventService';
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
    let id: number = Number(this.activatedRoute.snapshot.params['id']);
    if (id) {
      this.event = this.eventService.getEventById(id);
      if (this.event == null) {
        this.router.navigate(['not-found']);
      }
    }
    else {
      this.router.navigate(['not-found']);
    }
  }

}
