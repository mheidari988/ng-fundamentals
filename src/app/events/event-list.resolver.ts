import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { EventService } from './services/eventService';

@Injectable({
  providedIn: 'root'
})
export class EventListResolver implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(): Observable<any> {

    return this.eventService.getEvents().pipe(map(events => events));
  }
}
