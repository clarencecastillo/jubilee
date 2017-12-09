import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Content, AlertController } from 'ionic-angular';

import { PaymentPage } from '../payment/payment';

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {

  @ViewChild(Content) content: Content;

  defaultImage: string = "assets/imgs/drink_1.png";
  drink;
  bar;
  groupCode: string;
  bookingTime: string;
  price: number = 58.88;
  onPaymentSuccess: Function;
  addDrink: Function;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController) {

    this.drink = navParams.get('drink');
    if (this.drink.image == undefined) {
      this.drink.image = this.defaultImage;
    }
    this.drink.image = "url(" + this.drink.image + ")";

    this.bar = navParams.get('bar');
    this.bookingTime = navParams.get('bookingTime');
    this.groupCode = navParams.get('groupCode');
    this.onPaymentSuccess = navParams.get('onPaymentSuccess');
    this.addDrink = navParams.get('onAddDrink');
  }

  addDrinkToCart() {
    this.navCtrl.pop();
    this.addDrink(this.drink);
  }

  presentPaymentPopover(event) {

    this.content.scrollToBottom();

    let popover = this.popoverCtrl.create(PaymentPage, {
      onPaymentSuccess: () => {
        let alert = this.alertCtrl.create({
          title: '恭喜你，你已成功付款!',
          message: '点击此处继续操作',
          buttons: ['好的'],
          enableBackdropDismiss: false
        });
        this.navCtrl.pop();
        alert.present();
        alert.onDidDismiss(() => this.onPaymentSuccess());
      }
    }, {
      cssClass: 'payment-popover',
      enableBackdropDismiss: false
    });
    popover.present({
      ev: event
    });
  }

}
