import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderMenuPage } from './order-menu';

@NgModule({
  declarations: [
    OrderMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderMenuPage),
  ],
})
export class OrderMenuPageModule {}
