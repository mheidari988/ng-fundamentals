import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'upvote',
  styleUrls: ['upvote.component.css'],
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
          <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class UpvoteComponent {

  @Output() vote = new EventEmitter();
  @Input() count: number = 0;
  @Input() set voted(val: boolean) {
    this.heartColor = val ? 'red' : 'gray';
  }

  heartColor: string = 'gray';

  onClick() {
    this.vote.emit({});
  }
}
