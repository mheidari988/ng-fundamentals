import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../services/eventService';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorGuard implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const eventExists = !!this.eventService.getEventById(+route.params['id']);
    if (!eventExists) {
      return this.router.navigate(['not-found']);
    }

    return eventExists;
  }

}
