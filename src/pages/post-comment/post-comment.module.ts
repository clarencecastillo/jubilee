import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostCommentPage } from './post-comment';

@NgModule({
  declarations: [
    PostCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(PostCommentPage),
  ],
})
export class PostCommentPageModule {}
