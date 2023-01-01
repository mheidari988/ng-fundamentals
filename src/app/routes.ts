import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";

export const AppRoutes: Routes = [
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'events' },
]