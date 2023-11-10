import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-tutorial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe-tutorial.component.html',
  styleUrls: ['./pipe-tutorial.component.css'],
})
export class PipeTutorialComponent {
  Value: number = 99.9;

  today: Date = new Date(); // Date Pipe

  data: object = {
    //Json Pipe
    id: 1,
    name: 'neha',
  };
}
