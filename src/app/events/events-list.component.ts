import { Component, OnInit, ViewChild } from "@angular/core";
import { EventService } from "./shared/eventService";
import { ToastContainerDirective, ToastrService } from "ngx-toastr";

@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr />
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event" [routerLink]="['/events',event.id]"
                (click)="onThumbnailClick(event.name)"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit {

    events: any;

    @ViewChild(ToastContainerDirective, { static: true }) toastContainer!: ToastContainerDirective;

    constructor(
        private eventService: EventService,
        private toastrService: ToastrService) { }

    ngOnInit() {
        this.events = this.eventService.getEvents();
        this.toastrService.overlayContainer = this.toastContainer;
    }

    onThumbnailClick(eventName: string) {
        this.toastrService.success(eventName);
    }
}