import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './pages/posts/post/post.component';
import { PostsComponent } from './pages/posts/posts.component';
import { Routes, RouterModule} from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { NewPostComponent } from './pages/new-post/new-post.component'

const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'newPost', component: NewPostComponent },
  { path: '', component: PostsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    AuthComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
