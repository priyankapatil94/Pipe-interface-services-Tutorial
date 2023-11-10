import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userdetails-angular-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './userdetails-angular-directives.component.html',
  styleUrls: ['./userdetails-angular-directives.component.css'],
})
export class UserdetailsAngularDirectivesComponent {
  userName_Id!: string;
  Email_Id!: string;
  Address_Id!: string;

  userArray: Array<any> = [];

  onclick() {
    this.userArray.push({
      Name: this.userName_Id,
      Email: this.Email_Id,
      Address: this.Address_Id,
    });
    console.log(this.userArray);
  }

  onDelete(i: any) {
    this.userArray.splice(i, 1);
  }
}
