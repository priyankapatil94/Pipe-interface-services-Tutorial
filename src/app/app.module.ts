import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { PostformComponent } from './postform/postform.component';
import { FormsModule } from '@angular/forms';
import { UserdetailsAngularDirectivesComponent } from './userdetails-angular-directives/userdetails-angular-directives.component';
import { PipeTutorialComponent } from './pipe-tutorial/pipe-tutorial.component';
import { PipecliPipe } from './mypipe/pipecli.pipe';
import { SquarePipe } from './square.pipe';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { BackendApiService } from './services/backend-api.service';
import { InterfaceTutorialComponent } from './interface-tutorial/interface-tutorial.component';

@NgModule({
  imports: [BrowserModule, RouteRoutingModule, FormsModule, SquarePipe],
  declarations: [
    AppComponent,
    PostformComponent,
    UserdetailsAngularDirectivesComponent,
    PipeTutorialComponent,
    PipecliPipe,
    SquarePipe,
    PostComponent,
    PostlistComponent,
    InterfaceTutorialComponent,
  ],
  exports: [SquarePipe],
  bootstrap: [AppComponent],
  providers: [BackendApiService],
})
export class AppModule {}
