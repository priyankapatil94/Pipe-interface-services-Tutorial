import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
  // injectable class
})
export class PostlistComponent implements OnInit {
  postDataArray!: Array<any>;
  constructor(private backService: BackendApiService) {
    this.postDataArray = backService.postList;
  }
  ngOnInit(): void {}

  onAdd() {
    let newPost = {
      id: 8,
      postTitle: 'any 6',
    };
    this.backService.addPost(newPost);
  }
}
