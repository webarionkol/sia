import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ApiProvider } from '../../providers/api/api';
import { OtpPage } from '../otp/otp';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginregPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-loginreg',
  templateUrl: 'loginreg.html',
})
export class LoginregPage {
  mobile:any;
  password : any;
  constructor(public rest:ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginregPage');
  }
  loginagain(){
    this.navCtrl.setRoot(LoginPage)
  }
  otp(){
    var formData = new FormData();
    formData.append('mobile', this.mobile);
    formData.append('password',this.password)
    this.rest.signIn(formData).then((data:any)=>{
      localStorage.setItem('UserData', JSON.stringify(data.user_data));
 console.log(data)
     //this.navCtrl.push(HomePage, {data: data.user_data});
      // this.navCtrl.setRoot(HomePage, {data: data.user_data});

      // this.navCtrl.push(OtpagainPage)
    }).catch(err=>{
      alert(JSON.stringify(err['error'].msg))
    }).then(()=>{
      this.navCtrl.setRoot(HomePage);
    })
   
  }
}
