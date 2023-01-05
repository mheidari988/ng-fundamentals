import { Injectable } from '@angular/core';
import { ISession } from '../models/isession';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor() { }

  deleteVoter(session: ISession, userName: string) {
    session.voters = session.voters.filter(v => v !== userName);
  }

  addVote(session: ISession, userName: string) {
    session.voters.push(userName);
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some(v => v === userName);
  }
}
