import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators'


export interface Post {
  userId?: number,
  id: number,
  title: string,
  body: string,
}

export interface Comment {
  postId:number,
  id:number,
  name:string,
  email: string,
  body: string,
}

@Injectable({
  providedIn: 'root'
})
export class PostListService {

  public posts: Post[] = []
  public comments: Comment[] = []

  constructor(public http: HttpClient) { }

  loadPost(): Observable<Post[]> {
   return this.http.get<Post[]>('http://jsonplaceholder.typicode.com/posts?_limit=5')
   .pipe(tap(posts => this.posts = posts))
  }

  loadComment(): Observable<Comment[]> {
    const z = Number(sessionStorage.getItem('postId'))
    return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${z}`)
    .pipe(tap(comments => this.comments = comments))
  }

  Delete(id) {
    this.posts = this.posts.filter(post => post.id !== id)
  }

  Add(post:Post) {
    this.posts.push(post);
    console.log(this.posts);
  }

  AddComment (comment: Comment) {
    this.comments.push(comment);
  }

}
