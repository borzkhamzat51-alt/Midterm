import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api-service';
import { Post } from '../post.model';
import { TitleCaseWordsPipe } from '../title-case-words-pipe';
import { CommonModule, DatePipe } from '@angular/common';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleCaseWordsPipe, DatePipe, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  posts$: Observable<Post[]>;
  today = new Date();
  flashlightStyle: SafeStyle = '';

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer) {
    this.posts$ = this.apiService.posts$;
  }

  @HostListener('document:mousemove', ['$event'])
  updateFlashlight(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    // We use a radial gradient where the center is transparent/red
    // and the outside is pure black to hide the page.
    const gradient = `radial-gradient(
      400px circle at ${x}px ${y}px,
      rgba(219, 32, 44, 0.2) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.98) 100%
    )`;

    this.flashlightStyle = this.sanitizer.bypassSecurityTrustStyle(gradient);
  }
}
