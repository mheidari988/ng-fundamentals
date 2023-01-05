import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISession } from './models/isession';

@Component({
  selector: 'session-thumbnail',
  template: `
        <div class="well hoverwell thumbnail">
            <h5>{{ session?.name | uppercase}}</h5>
            <div>Presenter: {{ session?.presenter}}</div>
            <div>Level: {{ session?.level }}</div>
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
export class SessionThumbnailComponent {
  @Input() session?: ISession;
}
