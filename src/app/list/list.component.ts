import { PostListService } from './../post-list.service';
import { Component,  OnInit  } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  constructor(public postService: PostListService) { }

  title = "Posts"
  newPost = '';
  filter = '';

  ngOnInit(): void {
  }

  Delete(id) {
    this.postService.Delete(id)
  }

  getId(id) {
    console.log(id);
  }

  filterComment(id) {
    sessionStorage.setItem('postId', id);
  }

  Update() {
    this.postService.loadPost().subscribe()
  }

}
