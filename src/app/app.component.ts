import { Component } from '@angular/core';
import { PostformComponent } from './postform/postform.component';
import { UserdetailsAngularDirectivesComponent } from './userdetails-angular-directives/userdetails-angular-directives.component';
import { PipeTutorialComponent } from './pipe-tutorial/pipe-tutorial.component';
import { SquarePipe } from './square.pipe';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { InterfaceTutorialComponent } from './interface-tutorial/interface-tutorial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PostformComponent,
    UserdetailsAngularDirectivesComponent,
    PipeTutorialComponent,
    PostComponent,
    PostlistComponent,
    InterfaceTutorialComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';

  userDetails = {
    // object declaration
    name: 'Neha',
    city: 'new York',
    contrycode: 'US',
  };
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
