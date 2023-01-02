import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsable-well',
  template: `
    <div class="well pointable" (click)="onToggle()">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class CollapsableWellComponent {
  @Input() title: string = '';
  visible = true;

  onToggle() {
    this.visible = !this.visible;
  }
}
