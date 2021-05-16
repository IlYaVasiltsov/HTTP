import { Post } from './post-list.service';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'postFilter',

})

export class PostPipe implements PipeTransform {

  transform(posts : Post[], filterString:string = ''): Post[] {
    if(!filterString.trim()) {
      return posts;
    }

    return posts.filter( post=> {
      return post.title.toLocaleLowerCase().indexOf(filterString.toLowerCase()) !== -1
    })
  }

}
