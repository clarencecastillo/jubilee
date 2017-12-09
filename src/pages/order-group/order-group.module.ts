import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderGroupPage } from './order-group';

@NgModule({
  declarations: [
    OrderGroupPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderGroupPage),
  ],
})
export class OrderGroupPageModule {}
