import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create-event.component";
import { PageNotFoundComponent } from "./shared/errors/page-not-found.component";
import { EventListResolver } from "./events/event-list.resolver";
import { CreateSessionComponent } from "./events/event-details/create-session.component";
import { EventResolver } from "./events/event.resolver";

export const AppRoutes: Routes = [
    { path: 'not-found', component: PageNotFoundComponent },
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
    { path: 'users', loadChildren: () => import('./users/user.module').then(m => m.UserModule) },
    { path: '', pathMatch: 'full', redirectTo: 'events' },
    { path: '**', component: PageNotFoundComponent },
]