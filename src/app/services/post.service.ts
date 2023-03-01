import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IPost } from '../types/post';
import { IComment } from '../types/comment';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl: string = API_URL;

  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.apiUrl}/posts`);
  }

  getPost(post: IPost): Observable<IPost> {
    return this.http.get<IPost>(`${this.apiUrl}/post/${post.id}`);
  }

  getCommentsOfPost(post: IPost): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.apiUrl}/post/${post.id}/comments`);
  }
}
