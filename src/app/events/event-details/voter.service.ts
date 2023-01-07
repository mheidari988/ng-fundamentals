import { Injectable } from '@angular/core';
import { ISession } from '../models/isession';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  deleteVote(eventId: number, session: ISession, voterName: string) {
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.delete(url)
      .pipe(catchError(this.handleError<any>('deleteVote')))
      .subscribe();
  }

  addVote(eventId: number, session: ISession, voterName: string) {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, {}, options)
      .pipe(catchError(this.handleError<any>('addVote')))
      .subscribe();
  }

  userHasVoted(session: ISession, userName: string): boolean {
    return session.voters.some(v => v === userName);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
