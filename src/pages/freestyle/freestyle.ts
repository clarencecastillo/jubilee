import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-freestyle',
  templateUrl: 'freestyle.html',
})
export class FreestylePage {

  bar;
  steps = [
    {
      name: "第一步: 酒精基酒",
      options: [
        {
          image: "assets/imgs/step_1_1.png",
          description: "朗姆酒",
          active: false
        },
        {
          image: "assets/imgs/step_1_2.png",
          description: "威士忌",
          active: false
        },
        {
          image: "assets/imgs/step_1_3.png",
          description: "白兰地",
          active: false
        },
        {
          image: "assets/imgs/step_1_4.png",
          description: "杜松子酒",
          active: false
        },
        {
          image: "assets/imgs/step_1_5.png",
          description: "龙舌兰酒",
          active: false
        },
        {
          image: "assets/imgs/step_1_6.png",
          description: "伏特加",
          active: false
        }
      ]
    },
    {
      name: "第二步: 无酒精基酒",
      options: [
        {
          image: "assets/imgs/step_2_1.png",
          description: "蔓越梅果汁",
          active: false
        },
        {
          image: "assets/imgs/step_2_2.png",
          description: "芒果果汁",
          active: false
        },
        {
          image: "assets/imgs/step_2_3.png",
          description: "橙汁",
          active: false
        },
        {
          image: "assets/imgs/step_2_4.png",
          description: "青柠汁",
          active: false
        },
        {
          image: "assets/imgs/step_2_5.png",
          description: "草莓汁",
          active: false
        }
      ]
    },
    {
      name: "第二步: 无酒精基酒",
      options: [
        {
          image: "assets/imgs/step_3_1.png",
          description: "可乐",
          active: false
        },
        {
          image: "assets/imgs/step_3_2.png",
          description: "雪碧",
          active: false
        },
        {
          image: "assets/imgs/step_3_3.png",
          description: "姜汁汽水",
          active: false
        },
        {
          image: "assets/imgs/step_3_4.png",
          description: "汤力水",
          active: false
        }
      ]
    },
    {
      name: "第三步: 加入你的调料",
      options: [
        {
          image: "assets/imgs/step_4_1.png",
          description: "柠檬",
          active: false
        },
        {
          image: "assets/imgs/step_4_2.png",
          description: "薄荷",
          active: false
        }
      ]
    }
  ];

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.bar = navParams.get('bar');
  }

  dismiss(order) {
    this.viewCtrl.dismiss(order);
  }

}
