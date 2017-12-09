import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-session',
  templateUrl: 'session.html',
})
export class SessionPage {

  sessionForm: FormGroup;
  type: string;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

    this.type = navParams.get('type');
    this.sessionForm = this.formBuilder.group({
      bookingTime: [null, Validators.required],
      peopleCount: [null, this.type == 'group' ? [Validators.required, Validators.min(2)] : undefined]
    });

  }

  dismiss() {
    if (this.type == 'group' && this.sessionForm.valid) {
      let loading = this.loadingCtrl.create({
        content: '亲，请稍等片刻<br>正在提取你的小组点酒代码'
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: '恭喜你， 你的点酒代码已提取!',
          message: 'A3537',
          buttons: ['好的']
        });
        alert.present();
        alert.onDidDismiss(() => {
          this.viewCtrl.dismiss(this.sessionForm);
        });
      }, 5000);
    } else {
      this.viewCtrl.dismiss(this.sessionForm);
    }
  }

}
