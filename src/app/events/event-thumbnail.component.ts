import { Component, Input } from "@angular/core";
import { IEvent } from "./models/ievent";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{ event?.name | uppercase}}</h2>
            <div>Date: {{ event?.date | date:'mediumDate'}}</div>
            <div [ngClass]="getStartTimeClass()" 
            [ngSwitch]="event?.time">Time: {{ event?.time }}
                <span *ngSwitchCase="'10:00 am'">(Early start)</span>
                <span *ngSwitchCase="'8:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>  
            </div>
            <div>Price: {{ event?.price | currency }}</div>
            <div [hidden]="!event?.location">
                <span>Location: {{ event?.location?.address }}</span>
                <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
            </div>
        </div>
    `,
    styles: [`
        .green{color:#003300 !important;}
        .bold{font-weight:bold;}
        .thumbnail{min-height:210px;}
        .pad-left{margin-left:10px;}
        .well div{color:#bbb;}
    `]
})
export class EventThumbnailComponent {
    @Input() event?: IEvent;

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold'];
        }

        return [];
    }
}