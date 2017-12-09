import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  bar;

  drinks = [
    {
      name: "玛格丽特",
      description: "鸡尾酒，柠檬汁，君度橙皮酒",
      image: "assets/imgs/drink_2.png"
    },
    {
      name: "粉红佳人",
      description: "金，鸡蛋清，红石榴，糖浆，牛",
      image: "assets/imgs/drink_3.png"
    },
    {
      name: "长岛冰茶",
      description: "伏特加，琴酒，朗姆酒，龙舌兰",
      image: "assets/imgs/drink_4.png"
    },
    {
      name: "白俄罗斯",
      description: "特加酒，咖啡香甜酒，鲜奶",
      image: "assets/imgs/drink_5.png"
    },
    {
      name: "螺丝起子",
      description: "伏特加，金酒，青柠汁，柠檬，西柚",
      image: "assets/imgs/drink_6.png"
    },
    {
      name: "日出",
      description: "龙舌兰, 橙汁,石榴糖浆, 橙子片",
      image: "assets/imgs/drink_7.png"

    },
    {
      name: "性感沙滩",
      description: "伏特加, 蜜桃甜酒, 蔓越莓汁, 橙汁",
      image: "assets/imgs/drink_8.png"
    }
  ];

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.bar = navParams.get('bar');
  }

  dismiss(drink) {
    this.viewCtrl.dismiss(drink);
  }

}
