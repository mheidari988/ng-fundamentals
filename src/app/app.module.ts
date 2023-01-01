import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/eventService';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { PageNotFoundComponent } from './shared/errors/page-not-found.component';
import { EventRouteActivatorGuard } from './events/event-details/event-route-activator.guard';

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }),
    ToastContainerModule,
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    PageNotFoundComponent
  ],
  providers: [
    EventService,
    EventRouteActivatorGuard
  ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }
