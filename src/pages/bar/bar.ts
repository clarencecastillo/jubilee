import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { BarHomePage } from '../bar-home/bar-home';
import { LocationPage } from '../location/location';
import { CommentsPage } from '../comments/comments';
import { CartPage } from '../cart/cart';
import { OrderConfirmPage } from '../order-confirm/order-confirm';

@IonicPage()
@Component({
  selector: 'page-bar',
  templateUrl: 'bar.html',
})
export class BarPage {

  barHomePage = BarHomePage;
  barLocationPage = LocationPage;
  barCommentsPage = CommentsPage;

  cart = [];
  params;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {

    this.params = {
      bar: navParams.get('bar'),
      bookingTime: navParams.get('bookingTime'),
      groupCode: navParams.get('groupCode'),
      onAddDrink: drink => {
        this.addDrink(drink);
      },
      onPaymentSuccess: type => {
        this.presentOrderConfirmation(type);
      }
    }
  }

  presentCartModal() {
    let modal = this.modalCtrl.create(CartPage, {
      cart: this.cart,
      bar: this.navParams.get('bar'),
      onRemoveDrink: index => {
        this.removeDrink(index);
      },
      onPaymentSuccess: type => {
        this.presentOrderConfirmation(type);
      }
    });
    modal.present();
  }

  presentOrderConfirmation(type) {
    this.modalCtrl.create(OrderConfirmPage, {
      type: type,
      bar: this.navParams.get('bar')
    }).present();
  }

  removeDrink(index) {
    this.cart.splice(index, 1);
  }

  addDrink(drink) {
    drink.price = 58.88;
    this.cart.push(drink);
  }

}
