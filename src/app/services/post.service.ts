import { Injectable, Inject }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of }          from 'rxjs';
import { catchError, map, tap }    from 'rxjs/operators';

import { IPost }                   from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl) {
    console.log("PostService: ");
  }

  private getUrl() {
    return this.baseUrl + 'assets/json/posts.json';
  }

  public getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.getUrl());
  }

  public createPost(post: IPost): any {
    return this.http.post<IPost>(this.getUrl(), post);
  }

  public updatePost(post: IPost): any {
    return this.http.put<IPost>(this.getUrl(), post);
  }

  public deletePost(post: IPost): any {
    return this.http.delete<IPost>(this.getUrl(), <any>post);
  }
}
