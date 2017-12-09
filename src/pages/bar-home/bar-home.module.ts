import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarHomePage } from './bar-home';

@NgModule({
  declarations: [
    BarHomePage,
  ],
  imports: [
    IonicPageModule.forChild(BarHomePage),
  ],
})
export class BarHomePageModule {}
