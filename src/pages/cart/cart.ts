import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, PopoverController, AlertController } from 'ionic-angular';

import { PaymentPage } from '../payment/payment';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  bar;
  cart;
  removeDrink: Function;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController) {
    this.bar = navParams.get('bar');
    this.cart = navParams.get('cart');
    this.removeDrink = navParams.get('onRemoveDrink');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentPaymentPopover(event) {
    let popover = this.popoverCtrl.create(PaymentPage, {
      onPaymentSuccess: () => {
        this.clearCart();
        let alert = this.alertCtrl.create({
          title: '恭喜你，你已成功付款!',
          message: '点击此处继续操作',
          buttons: ['好的'],
          enableBackdropDismiss: false
        });
        this.dismiss();
        alert.present();
        alert.onDidDismiss(this.navParams.get('onPaymentSuccess'));
      }
    }, {
      cssClass: 'payment-popover',
      enableBackdropDismiss: false
    });
    popover.present({
      ev: event
    });
  }

  clearCart() {
    this.cart.splice(0, this.cart.length);
  }
}
