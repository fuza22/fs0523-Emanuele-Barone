import { Component, Input } from '@angular/core';
import { IPost } from '../../posts/ipost';
import { PostService } from '../../post.service';

@Component({
  selector: '.app-active-card',
  templateUrl: './active-card.component.html',
  styleUrl: './active-card.component.scss'
})
export class ActiveCardComponent {

  constructor(private PostSvc: PostService){}

  @Input() posts:IPost[]=[];

  getClassObj(post: IPost): any{
    return{
      'bg-warning':post.type == 'news',
      'bg-black':post.type == 'politics',
      'text-white':post.type == 'politics',
      'bg-info':post.type == 'education'
    }
  }
}
