import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  paymentForm: FormGroup;
  passCodeEntered: boolean = false;
  onPaymentSuccess: Function;

  constructor(
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController) {

    this.onPaymentSuccess = navParams.get('onPaymentSuccess');
    this.paymentForm = this.formBuilder.group({
      passCode: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  dismiss(cancel) {

    if (cancel || !this.paymentForm.valid) {
      this.viewCtrl.dismiss();
    } else {
      let loading = this.loadingCtrl.create({
        content: '正在付款中...'
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.viewCtrl.dismiss();
        loading.onDidDismiss(() => {
          this.onPaymentSuccess();
        });
      }, 3000);
    }
  }

  enterPassCode() {
    if (!this.passCodeEntered) {
      this.passCodeEntered = true;
      let passCode = "";
      let interval = setInterval(() => {
        passCode += "0";
        this.paymentForm.controls['passCode'].setValue(passCode);
        if (passCode.length == 6) {
          clearInterval(interval);
        }
      }, 250);
    }

  }
}
