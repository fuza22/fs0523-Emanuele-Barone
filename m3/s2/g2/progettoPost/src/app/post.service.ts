import { Injectable } from '@angular/core';
import { IPost } from './posts/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:IPost[] = [
    {
    "id": 0,
    "body": "Lorem ipsum dolor sit amet",
    "title": "Lorem ipsum dolor sit amet",
    "active": true
    },
    {
      "id": 1,
      "body": "Lorem ipsum dolor sit amet",
      "title": "Lorem ipsum dolor sit amet",
      "active": true
    },
    {
      "id": 2,
      "body": "Lorem ipsum dolor sit amet",
      "title": "Lorem ipsum dolor sit amet",
      "active": true
    },
    {
      "id": 3,
      "body": "Lorem ipsum dolor sit amet",
      "title": "Lorem ipsum dolor sit amet",
      "active": true
    },
    {
      "id": 4,
      "body": "Lorem ipsum dolor sit amet",
      "title": "Lorem ipsum dolor sit amet",
      "active": false
    },
    {
      "id": 5,
      "body": "Lorem ipsum dolor sit amet",
      "title": "Lorem ipsum dolor sit amet",
      "active": true
    },
    {
      "id": 6,
      "body": "Lorem ipsum dolor sit amet",
      "title": "Lorem ipsum dolor sit amet",
      "active": true
    },
    {
      "id": 7,
      "body": "Lorem ipsum dolor sit amet",
      "title": "Lorem ipsum dolor sit amet",
      "active": false
    }


  ];

  getActivePosts(){

    return this.posts.filter(post => post.active)

  }

  getInactivePosts(){

    return this.posts.filter(post => !post.active)

  }

}
