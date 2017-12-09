import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { OrderMenuPage } from '../pages/order-menu/order-menu';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { ChatHistoryPage } from '../pages/chat-history/chat-history';
import { WechatPage } from '../pages/wechat/wechat';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalCtrl: ModalController) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '主页', component: HomePage },
      { title: '用户', component: AccountPage },
      { title: '点酒', component: OrderMenuPage },
      { title: '购买记录', component: OrderHistoryPage },
      { title: '聊天', component: ChatHistoryPage },
      { title: '微信账户', component: WechatPage },
      { title: '设置', component: SettingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
