import { Comment } from './post-list.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterComment'
})
export class FilterCommentPipe implements PipeTransform {

  transform(comments: Comment[],filterString:string = ''): Comment[] {
    if(!filterString.trim()) {
      return comments;
    }

    return comments.filter(comment => {
      return comment.body.toLowerCase().indexOf(filterString.toLowerCase()) !== -1
    })
  }

}
