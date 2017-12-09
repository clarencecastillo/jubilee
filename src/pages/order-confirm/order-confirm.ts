import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html',
})
export class OrderConfirmPage {

  bar;
  type: string;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.type = navParams.get('type');
    this.bar = this.navParams.get('bar');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
