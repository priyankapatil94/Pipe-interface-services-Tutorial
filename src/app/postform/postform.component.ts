import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css'],
})
export class PostformComponent {
  Name!: string;
  PostDetails!: string;
  ImageUrl!: string;
  LinkUrl!: string;

  //'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg

  addBackground: boolean = true;

  onClickbutton() {}
}
