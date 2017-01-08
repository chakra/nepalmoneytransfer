import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Transfermoney page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transfermoney',
  templateUrl: 'transfermoney.html'
})
export class TransfermoneyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //console.log(this.navParams.id)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransfermoneyPage');
  }

}
