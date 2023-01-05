import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ISession } from '../models/isession';
import { AuthService } from 'src/app/users/services/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[] | undefined = [];
  @Input() filterBy: string = 'all';
  @Input() sortBy: string = 'name';

  constructor(
    public authService: AuthService,
    private voteService: VoterService) { }

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

  toggleVote(session: ISession) {
    if (!this.authService.currentUser) {
      return;
    }

    if (this.userHasVoted(session)) {
      this.voteService.deleteVoter(session, this.authService.currentUser!.userName);
    }
    else {
      this.voteService.addVote(session, this.authService.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDes);
    }
  }

  userHasVoted(session: ISession): boolean {
    if (!this.authService.currentUser) {
      return false;
    }

    return this.voteService.userHasVoted(session, this.authService.currentUser.userName);
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