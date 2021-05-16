import { Post, PostListService } from './../post-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  name: string;
  body: string;

  constructor(public postService : PostListService) { }

  ngOnInit(): void {
  }

  addPost(){
     const post: Post = {
        userId: Date.now(),
        id: Date.now(),
        title:this.name,
        body:this.body
      }
      this.postService.Add(post);
      this.name = '';
  }
}
