import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the PostCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-comment',
  templateUrl: 'post-comment.html',
})
export class PostCommentPage {

  postCommentForm: FormGroup;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.postCommentForm = this.formBuilder.group({
      comment: ["", Validators.required],
      rating: [0, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  dismiss(submit) {
    if (!submit) {
      this.postCommentForm.reset();
    }
    this.viewCtrl.dismiss(this.postCommentForm);
  }

  setRating(rating) {
    this.postCommentForm.controls['rating'].setValue(rating);
  }

}
