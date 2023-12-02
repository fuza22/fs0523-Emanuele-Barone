import { Component } from '@angular/core';
import { IPost } from '../ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrl: './inactive-post.component.scss'
})
export class InactivePostComponent {

  inactivePosts:IPost[] = [];
  constructor(private PostSvc: PostService){}

  ngOnInit() {

    this.inactivePosts = this.PostSvc.getInactivePosts();

  }

}
