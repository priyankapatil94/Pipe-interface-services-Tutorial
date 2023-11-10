import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  post!: Array<any>;
  // this is dependancy injection when we are passing in constructure
  constructor(private postService: BackendApiService) {
    //let postService = new BackendApiService(); // this is dependant on this component
    this.post = postService.postList;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
