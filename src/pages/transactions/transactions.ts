import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html'
})
export class TransactionsPage {

  /*  transactionsGroupedByDay = [{transaction: {description: "Butter", date:"", amount : "1000",
                          payee: {email : "abc@gmail.com"}}}];*/

     constructor(public navCtrl: NavController, public navParams: NavParams) {
     //console.log(this.navParams.id)
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransfermoneyPage');
  }


}
