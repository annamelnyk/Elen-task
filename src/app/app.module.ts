import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MasterComponent } from './pages/master/master.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostComponent } from './components/post/post.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentComponent } from './components/comment/comment.component';

const Router = RouterModule.forRoot([
  { path: '', component: MasterComponent },
  { path: 'detail', component: DetailComponent },
]);
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    PostsListComponent,
    PostComponent,
    CommentsListComponent,
    CommentComponent,
  ],
  imports: [BrowserModule, Router, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
