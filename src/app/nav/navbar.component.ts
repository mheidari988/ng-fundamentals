import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/services/auth.service';
import { EventService } from '../events/services/eventService';
import { ISession } from '../events/models/isession';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  searchTerm: string = '';
  foundSessions: ISession[] = [];

  constructor(
    public authService: AuthService,
    private eventService: EventService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  onSearchSessions(text: string) {
    this.eventService.searchSessions(text).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    })
  }
}
