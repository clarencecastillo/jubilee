import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController) {
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: '登陆中...'
    });
    loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.setRoot(HomePage);
    }, 500);
  }

}
