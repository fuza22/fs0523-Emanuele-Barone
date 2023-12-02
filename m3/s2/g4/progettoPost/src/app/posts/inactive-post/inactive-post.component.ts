import { Component } from '@angular/core';
import { IPost } from '../ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class PostInattiviComponent {
  inactivePost:IPost[] = [];

  constructor(private PostSvc: PostService){}

  ngOnInit(){
    this.inactivePost = this.PostSvc.getInactivePosts()
  }
}
