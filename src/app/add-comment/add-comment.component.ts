import { Comment, PostListService } from './../post-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  constructor(public postService : PostListService) { }

  newComm = '';

  ngOnInit(): void {
  }

  AddComment() {
    const comm: Comment = {
      postId:Number(sessionStorage.getItem('postId')),
      id:Date.now(),
      name:'Logout user',
      email: 'Logout user',
      body: this.newComm,
    }
    this.postService.AddComment(comm);
    this.newComm = '';
  }

}
