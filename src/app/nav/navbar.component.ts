import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from '../users/services/auth.service';
import { EventService } from '../events/services/eventService';
import { ISession } from '../events/models/isession';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  searchTerm: string = '';
  foundSessions: ISession[] = [];
  modalRef?: BsModalRef;
  @ViewChild('searchResultModal') searchResultModal!: TemplateRef<any>;

  constructor(
    public authService: AuthService,
    private eventService: EventService,
    private modalService: BsModalService,
    private router: Router) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  onSearchSessions(text: string) {
    this.eventService.searchSessions(text).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
      this.modalRef = this.modalService.show(this.searchResultModal);
    })
  }

  onThumbnailClick(sessionId: number, sessionName: string) {
    this.eventService.getEvents().subscribe(events => {
      events.forEach(e => {
        if (e.sessions.findIndex(s => s.id == sessionId && s.name == sessionName) > -1) {
          this.router.navigate(['/events', events[e.id].id]);
          this.modalRef?.hide();
        }
      })
    })
  }
}
