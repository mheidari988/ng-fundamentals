import { EventEmitter, Injectable } from "@angular/core";
import { Observable, catchError, of } from "rxjs";
import { IEvent } from "../models/ievent";
import { ISession } from "../models/isession";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class EventService {

    constructor(private http: HttpClient) { }

    getEvents(): Observable<IEvent[]> {
        return this.http.get<IEvent[]>('/api/events')
            .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
    }

    getEventById(id: number): Observable<IEvent> {
        return this.http.get<IEvent>('/api/events/' + id)
            .pipe(catchError(this.handleError<IEvent>('getEventById')));
    }

    saveEvent(event: IEvent) {
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
        return this.http.post('/api/events', event, options)
            .pipe(catchError(this.handleError<IEvent>('saveEvent')));
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
        return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
            .pipe(catchError(this.handleError<ISession[]>('searchSessions', [])));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}