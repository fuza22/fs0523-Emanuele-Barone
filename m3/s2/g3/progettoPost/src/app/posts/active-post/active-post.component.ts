import { Component } from '@angular/core';
import { IPost } from '../ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-active-post',
  templateUrl: './active-post.component.html',
  styleUrl: './active-post.component.scss'
})
export class ActivePostComponent {

  activePosts:IPost[] = [];
  constructor(private PostSvc: PostService){}

  ngOnInit() {

    this.activePosts = this.PostSvc.getActivePosts();

  }

}
