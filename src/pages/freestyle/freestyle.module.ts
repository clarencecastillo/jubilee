import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreestylePage } from './freestyle';

@NgModule({
  declarations: [
    FreestylePage,
  ],
  imports: [
    IonicPageModule.forChild(FreestylePage),
  ],
})
export class FreestylePageModule {}
