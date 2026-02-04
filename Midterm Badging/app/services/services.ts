import { Component } from '@angular/core';
import { ApiService } from '../api-service';
import { Post } from '../post.model';
import { combineLatest, map, startWith, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TitleCaseWordsPipe } from '../title-case-words-pipe';
@Component({
  selector: 'app-services',
  imports: [ReactiveFormsModule, CommonModule, TitleCaseWordsPipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
   searchControl = new FormControl<string>('');
  posts$: Observable<Post[]>;

  constructor(private apiService: ApiService) {
    this.posts$ = combineLatest([
      this.apiService.posts$,
      this.searchControl.valueChanges.pipe(startWith(''))
    ]).pipe(
      map(([posts, search]) => {
        const term = (search || '').toLowerCase();
        return posts.filter(
          post =>
            post.title.toLowerCase().includes(term) ||
            post.body.toLowerCase().includes(term)
        );
      })
    );
  }
}
