import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Httpclient } from './httpclient';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],   // ✅ REQUIRED for *ngFor
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('http-client-demo');
  httpusers: User[] = [];

  constructor(private http: Httpclient) {}

  ngOnInit() {
    this.http.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });
  }
}
