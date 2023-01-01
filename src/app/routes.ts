import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create-event.component";
import { PageNotFoundComponent } from "./shared/errors/page-not-found.component";
import { EventRouteActivatorGuard } from "./events/event-details/event-route-activator.guard";
import { EventListResolver } from "./events/event-list.resolver";

export const AppRoutes: Routes = [
    { path: 'not-found', component: PageNotFoundComponent },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'events' },
    { path: '**', component: PageNotFoundComponent },
]