import { Component, Input } from '@angular/core';
import { Post } from '../posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  {

  @Input() post: Post;

  onLike() {this.post.loveIts ++; }
  onDislike() { this.post.loveIts --; }


}
