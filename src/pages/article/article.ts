import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  index: number;
  articles = [
    {
      title: "Cocktail of the Day",
      subTitle: "Madness for Manhattan!",
      text: "曼哈頓（Manhattan）是一種由威士忌、苦艾酒和香艾酒（英语：bitters）調製的雞尾酒。曼哈頓較常使用的威士忌包括黑麥威士忌（傳統選擇）、加拿大威士忌、波本威士忌、調和式威士忌。\n\n 这款鸡尾酒是在1874年纽约曼哈顿俱乐部在聚会上新上任的州长珍妮丘吉尔支持发明的，原配方是黑麦威士忌，甜苦艾酒与少量的苦酒和樱桃装饰。由于美国南北方地区不同，所用的威士忌也不同，北方更喜爱黑麦威士忌，南方则是波本威士忌。",
      image: "assets/imgs/article_1.png"
    },
    {
      title: "Bar of the Day",
      subTitle: "上海磨轮酒吧",
      text: "上海磨轮酒吧是一间具有特色的地方。酒吧里的设计富有古代法国风，能让顾客倒流时间回到1960年的法国酒吧。平日时间能应付大量的人流，招呼的顾客属于学生和年轻的上班族。酒吧里的服务人员十分友善，能迅速地把鸡尾酒送上卓。此外，酒吧后的酒保都富有许多调酒的经验，定能把顾客心仪的鸡尾酒调出来。若想去上海磨轮吧享乐，记得预先订阅哦！酒吧从星期一到四开至12pm，星期五到星期天开至3am。",
      image: "assets/imgs/article_2.png"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.index = navParams.get('index');
  }

}
