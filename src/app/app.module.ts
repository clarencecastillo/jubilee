import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OrderMenuPage } from '../pages/order-menu/order-menu';
import { AccountPage } from '../pages/account/account';
import { OrderTypePage } from '../pages/order-type/order-type';
import { SettingsPage } from '../pages/settings/settings';
import { OrderGroupPage } from '../pages/order-group/order-group';
import { LoginPage } from '../pages/login/login';
import { SessionPage } from '../pages/session/session';
import { SortPage } from '../pages/sort/sort';
import { BarPage } from '../pages/bar/bar';
import { BarHomePage } from '../pages/bar-home/bar-home';
import { LocationPage } from '../pages/location/location';
import { CommentsPage } from '../pages/comments/comments';
import { MenuPage } from '../pages/menu/menu';
import { FreestylePage } from '../pages/freestyle/freestyle';
import { DrinkPage } from '../pages/drink/drink';
import { PaymentPage } from '../pages/payment/payment';
import { OrderConfirmPage } from '../pages/order-confirm/order-confirm';
import { ArticlePage } from '../pages/article/article';
import { CartPage } from '../pages/cart/cart';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { ChatHistoryPage } from '../pages/chat-history/chat-history';
import { WechatPage } from '../pages/wechat/wechat';
import { PostCommentPage } from '../pages/post-comment/post-comment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderMenuPage,
    AccountPage,
    OrderTypePage,
    SettingsPage,
    OrderGroupPage,
    LoginPage,
    SessionPage,
    SortPage,
    BarPage,
    BarHomePage,
    LocationPage,
    CommentsPage,
    MenuPage,
    DrinkPage,
    FreestylePage,
    PaymentPage,
    OrderConfirmPage,
    ArticlePage,
    CartPage,
    OrderHistoryPage,
    ChatHistoryPage,
    WechatPage,
    PostCommentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderMenuPage,
    AccountPage,
    OrderTypePage,
    SettingsPage,
    OrderGroupPage,
    LoginPage,
    SessionPage,
    SortPage,
    BarPage,
    BarHomePage,
    LocationPage,
    CommentsPage,
    MenuPage,
    DrinkPage,
    FreestylePage,
    PaymentPage,
    OrderConfirmPage,
    ArticlePage,
    CartPage,
    OrderHistoryPage,
    ChatHistoryPage,
    WechatPage,
    PostCommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
