import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  postList: Array<any> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' },
    { id: 6, postTitle: 'Post 6' },
    { id: 7, postTitle: 'Post 7' },
  ];

  constructor() {}

  addPost(data: any) {
    this.postList.push(data);
  }
  deletePost(data: any) {
    this.postList.splice(data, 1);
  }
}
