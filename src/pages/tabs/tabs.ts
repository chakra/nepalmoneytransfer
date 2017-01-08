import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

import { TransfermoneyPage } from '../transfermoney/transfermoney';
import { TransactionsPage } from '../transactions/transactions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TransfermoneyPage;
  tab2Root: any = TransactionsPage;
  
  //@ViewChild('myTabs') tabRef: Tabs;
  
  isAndroid: boolean = false;

  constructor(platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
   // console.log(this.tabRef);
  }
  
  
  selected() {
    //this.navCtrl.push(TransactionsPage);
  }
}
