import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  bar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bar = navParams.get('bar');
  }
}
