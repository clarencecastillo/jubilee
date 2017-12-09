import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {

  activeSort: string;
  sortOptions = [
    "综合排序",
    "价格最高",
    "价格最底",
    "人气最高",
    "离我最近",
    "好评优先"
  ];

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams) {
      this.activeSort = navParams.get('activeSort');
  }

  setActive() {
    this.viewCtrl.dismiss({
      activeSort: this.activeSort
    }, undefined, {
      animate: false
    });
  }

}
