import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../models/isession';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[] | undefined = [];
  @Input() filterBy: string = 'all';
  @Input() sortBy: string = 'name';

  visibleSessions: ISession[] = [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);

      switch (this.sortBy) {
        case 'name':
          this.visibleSessions.sort(sortByNameAsc);
          break;
        case 'votes':
          this.visibleSessions.sort(sortByVotesDes);
          break;
        default:
          break;
      }
    }
  }

  filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions!.slice(0);
    }
    else {
      this.visibleSessions = this.sessions!.slice(0)
        .filter(s => s.level.toLocaleLowerCase() === filterBy.toLocaleLowerCase());
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}

function sortByVotesDes(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}