import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { OrderMenuPage } from '../order-menu/order-menu';
import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchInput: string;
  searchShouldShowCancel: boolean = true;
  searchPlaceholder: string = "搜索";

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  goToOrderMenu() {
    this.navCtrl.setRoot(OrderMenuPage);
  }

  goToArticle(index) {
    this.navCtrl.push(ArticlePage, {
      index: index
    });
  }

}
