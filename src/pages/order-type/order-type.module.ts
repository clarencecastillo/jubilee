import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderTypePage } from './order-type';

@NgModule({
  declarations: [
    OrderTypePage,
  ],
  imports: [
    IonicPageModule.forChild(OrderTypePage),
  ],
})
export class OrderTypePageModule {}
