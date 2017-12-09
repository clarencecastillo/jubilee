import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';
import { FreestylePage } from '../freestyle/freestyle';
import { DrinkPage } from '../drink/drink';

@IonicPage()
@Component({
  selector: 'page-bar-home',
  templateUrl: 'bar-home.html',
})
export class BarHomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  orderDrink(drink) {
    this.navCtrl.parent.parent.push(DrinkPage, {
      drink: drink,
      bar: this.navParams.get('bar'),
      bookingTime: '23:30',
      groupCode: 'A1233',
      onPaymentSuccess: this.navParams.get('onPaymentSuccess'),
      onAddDrink: this.navParams.get('onAddDrink')
    });
  }

  presentOrderModal(mode) {
    switch(mode) {
      case "menu": {
        let menuModal = this.modalCtrl.create(MenuPage, {
          bar: this.navParams.get('bar')
        });
        menuModal.present();
        menuModal.onDidDismiss(drink => {
          if (drink != undefined) {
            this.orderDrink(drink);
          }
        })
        break;
      } case "freestyle": {
        let freestyleModal = this.modalCtrl.create(FreestylePage, {
          bar: this.navParams.get('bar')
        });
        freestyleModal.present();
        freestyleModal.onDidDismiss(ordered => {
          if (ordered) {
            this.orderDrink({
              name: "Freestyle Cocktail",
              description: "- 威士忌\n- 可乐\n- 柠檬\n"
            });
          }
        })
        break;
      }
    }
  }

}
