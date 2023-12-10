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
}
