import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { Postinterface } from '../models/postinterface';

@Component({
  selector: 'app-interface-tutorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interface-tutorial.component.html',
  styleUrls: ['./interface-tutorial.component.css'],
})
export class InterfaceTutorialComponent {
  PostArray!: Array<any>;

  constructor(private backendservice: BackendApiService) {
    this.PostArray = this.backendservice.postList;
  }

  addNew() {
    let DataArray: Postinterface = {
      id: 8,
      postTitle: 'Post 8',
    };
    this.backendservice.addPost(DataArray);
  }

  onDelete(i: any) {
    this.backendservice.deletePost(i);
  }
}
