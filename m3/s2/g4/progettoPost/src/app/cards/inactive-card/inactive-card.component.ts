import { Component, Input } from '@angular/core';
import { IPost } from '../../posts/ipost';
import { PostService } from '../../post.service';

@Component({
  selector: '.app-inactive-card',
  templateUrl: './inactive-card.component.html',
  styleUrl: './inactive-card.component.scss'
})
export class InactiveCardComponent {

  constructor(private PostSvc: PostService){}

  @Input() posts:IPost[] = [];

  getClassObj(post: IPost): any{
    return{
      'bg-warning':post.type == 'news',
      'bg-black':post.type == 'politics',
      'text-white':post.type == 'politics',
      'bg-info':post.type == 'education'
    }
  }
}
