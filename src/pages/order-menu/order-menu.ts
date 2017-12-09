import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, ModalController, NavParams, PopoverController } from 'ionic-angular';

import { OrderTypePage } from '../order-type/order-type';
import { OrderGroupPage } from '../order-group/order-group';
import { SessionPage } from '../session/session';
import { SortPage } from '../sort/sort';
import { BarPage } from '../bar/bar';

import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-order-menu',
  templateUrl: 'order-menu.html',
})
export class OrderMenuPage {

  activeSort: string = "综合排序";
  searchInput: string = "";
  searchShouldShowCancel: boolean = true;
  searchPlaceholder: string = "搜索";
  priceFilter = {
    lower: 0,
    upper: 1000
  };
  locationFilter = [
    { name: "浦东新区", active: false },
    { name: "徐汇区", active: false },
    { name: "长宁区", active: false },
    { name: "黄浦区", active: false },
    { name: "静安区", active: false },
    { name: "卢湾区", active: false },
    { name: "杨浦区", active: false },
    { name: "普陀区", active: false },
    { name: "虹口区", active: false },
    { name: "宝山区", active: false },
    { name: "松江区", active: false }
  ];
  brandFilter = [
    { name: "绝对伏特加", active: false },
    { name: "史密诺夫(皇冠)", active: false },
    { name: "哥顿金酒", active: false },
    { name: "轩尼诗", active: false },
    { name: "人头马", active: false },
    { name: "拿破仑", active: false },
    { name: "德拉曼", active: false }
  ];
  cocktailFilter = [
    { name: "白俄罗斯", active: false },
    { name: "日出", active: false },
    { name: "粉红佳人", active: false },
    { name: "血腥玛丽", active: false },
    { name: "螺丝起子", active: false },
    { name: "古典鸡尾酒", active: false }
  ];
  barList = [
    { name: "Mr. She", image: "assets/imgs/bar_1.png", location: "浦东新区", rating: 4 },
    { name: "1989", image: "assets/imgs/bar_2.png", location: "浦东新区", rating: 3 },
    { name: "Winey", image: "assets/imgs/bar_3.png", location: "浦东新区", rating: 3 },
    { name: "Jack & Mary", image: "assets/imgs/bar_4.png", location: "浦东新区", rating: 5 },
    { name: "Lynrren", image: "assets/imgs/bar_5.png", location: "浦东新区", rating: 2 },
    { name: "Thickets", image: "assets/imgs/bar_6.png", location: "浦东新区", rating: 2 }
  ];

  bookingTime: string;
  groupCode: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {

  }

  ionViewCanEnter() {
    return new Promise((resolve, reject) => {

      if (this.navCtrl.getActive().name == "BarPage") {
        resolve();
      } else {
        let orderTypeModal = this.modalCtrl.create(OrderTypePage);

        orderTypeModal.present();
        orderTypeModal.onDidDismiss(data => {

          switch(data.type) {
            case 'single': {
              let singleSessionModal = this.modalCtrl.create(SessionPage, {
                type: 'single'
              });
              singleSessionModal.present();
              singleSessionModal.onDidDismiss(data => {
                if (data.valid) {
                  this.bookingTime = data.controls['bookingTime'].value;
                  resolve();
                } else {
                  reject();
                }
              });
              break;
            }
            case 'group': {
              this.modalCtrl.create(OrderGroupPage, {
                resolve: resolve,
                reject: reject
              }).present();
              break;
            }
            case undefined: {
              reject();
            }
          }
        });
      }
    });
  }

  hasFilterSelected() {
    return _.some(this.locationFilter, 'active') || _.some(this.brandFilter, 'active')
    || _.some(this.cocktailFilter, 'active');
  }

  shouldShowBarList() {
    return this.hasFilterSelected() || this.searchInput != "";
  }

  presentSortPopover(event) {
    let popover = this.popoverCtrl.create(SortPage, {
      activeSort: this.activeSort
    }, {
      cssClass: 'sort-popover'
    });
    popover.present({
      ev: event,
      animate: false
    });
    popover.onDidDismiss(data => {
      if (data != null) {
        this.activeSort = data.activeSort;
      }
    })
  }

  presentFilterMenu() {
    this.menuCtrl.open("right");
  }

  goToBar(bar) {
    this.navCtrl.push(BarPage, {
      bar: bar,
      bookingTime: this.bookingTime,
      groupCode: this.groupCode
    });
  }

  onSearchInput(event) {

  }

  onSearchCancel(event) {

  }
}
