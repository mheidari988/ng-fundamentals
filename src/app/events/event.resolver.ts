import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from './services/eventService';

@Injectable({
    providedIn: 'root'
})
export class EventResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {

        return this.eventService.getEventById(route.params['id']);
    }
}
