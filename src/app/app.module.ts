import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TransfermoneyPage } from '../pages/transfermoney/transfermoney';
import { TransactionsPage } from '../pages/transactions/transactions';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';

import { Auth } from '../providers/auth';
import { Details } from '../providers/details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    TransfermoneyPage,
    TransactionsPage,
    ResetPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    TransfermoneyPage,
    TransactionsPage,
    ResetPasswordPage
  ],
  providers: [Storage, Details, Auth]
})
export class AppModule {}
