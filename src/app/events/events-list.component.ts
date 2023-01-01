import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastContainerDirective, ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./models/ievent";

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

    events?: IEvent[];

    @ViewChild(ToastContainerDirective, { static: true }) toastContainer!: ToastContainerDirective;

    constructor(
        private toastrService: ToastrService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.events = this.activatedRoute.snapshot.data['events'];
        this.toastrService.overlayContainer = this.toastContainer;
    }

    onThumbnailClick(eventName: string) {
        this.toastrService.success(eventName);
    }
}