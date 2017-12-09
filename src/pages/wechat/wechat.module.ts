import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WechatPage } from './wechat';

@NgModule({
  declarations: [
    WechatPage,
  ],
  imports: [
    IonicPageModule.forChild(WechatPage),
  ],
})
export class WechatPageModule {}
