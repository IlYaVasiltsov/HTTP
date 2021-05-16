import { PostListService } from './../post-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss']
})
export class CommentPageComponent implements OnInit {

  constructor(public postService :PostListService, public router: Router) { }

  filterComment = '';

  ngOnInit(): void {
    const  x = Number(sessionStorage.getItem('commentId'))
    this.postService.loadComment().subscribe()
  }

  back() {
      this.router.navigate(['/list']);

  }

}
