import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from './post.model';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  posts$: Observable<Post[]>;
  constructor(private http: HttpClient){
    this.posts$ = this.http.get<Post[]>(this.apiUrl).pipe(
      shareReplay(1)
    );
  }
}
