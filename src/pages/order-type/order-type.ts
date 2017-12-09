import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order-type',
  templateUrl: 'order-type.html',
})
export class OrderTypePage {

  constructor(
    public viewCtrl: ViewController) {

  }

  dismiss(type) {
    this.viewCtrl.dismiss({
      type: type
    });
  }

}
