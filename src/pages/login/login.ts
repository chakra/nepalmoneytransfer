import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 
    email: string;
    password: string;
    loading: any;
    public loginForm:any;
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;
 
    constructor(public navCtrl: NavController, public authService: Auth, public loadingCtrl: LoadingController,
    public formBuilder: FormBuilder) {
        this.loginForm = formBuilder.group({
			email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
			password: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
            
	    });
    }
    
  /**
   * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
   */
  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }
 
    ionViewDidLoad() {
 
        this.showLoader();
 
        //Check if already authenticated
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.loading.dismiss();
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            console.log("Not already authorized");
            this.loading.dismiss();
        });
 
    }
 
    login(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
 
        this.showLoader();
 
        let credentials = {
            email: this.email,
            password: this.password
        };
 
        this.authService.login(credentials).then((result) => {
            this.loading.dismiss();
            console.log(result);
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            this.loading.dismiss();
            console.log(err);
        });
 
     }
    }
 
    launchSignup(){
        this.navCtrl.push(RegisterPage);
    }
 
    showLoader(){
 
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
 
        this.loading.present();
 
    }
 
}
