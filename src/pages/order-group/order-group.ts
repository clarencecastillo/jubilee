import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { SessionPage } from '../session/session';

@IonicPage()
@Component({
  selector: 'page-order-group',
  templateUrl: 'order-group.html',
})
export class OrderGroupPage {

  groupOrderForm: FormGroup;
  resolve: Function;
  reject: Function;

  constructor(
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {
      this.resolve = this.navParams.get('resolve');
      this.reject = this.navParams.get('reject');
      this.groupOrderForm = this.formBuilder.group({
        groupCode: [navParams.get('groupCode'), Validators.required]
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
    if (this.groupOrderForm.valid) {
      this.resolve();
    } else {
      this.reject();
    }
  }

  presentGroupSessionModal() {
    this.viewCtrl.dismiss();
    let groupSessionModal = this.modalCtrl.create(SessionPage, {
      type: 'group'
    });
    groupSessionModal.present();
    groupSessionModal.onDidDismiss(data => {
      this.modalCtrl.create(OrderGroupPage, {
        resolve: this.resolve,
        reject: this.reject,
        groupCode: data.valid ? 'A3537' : undefined
      }).present();
    });
  }
}
