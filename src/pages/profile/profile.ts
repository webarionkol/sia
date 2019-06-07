import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { LoginregPage } from '../loginreg/loginreg';

/**
 * Generated class for the ProfilePage page.
 *
 * See https:ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  name:any;
  mobile:any;
  pincode: any;
  address: any;
  city: any;
  state: any;
  pan:any;
  email:any;
  public key :any;
  constructor(public toastCtrl:ToastController,public loader: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
      //  this.userdata=localStorage.getItem(JSON.)
      
    }
  
  
     ionViewDidLoad() {
       console.log('ionViewDidLoad ProfilePage');
     }
     logout(){
      
   
         this.toastCtrl.create({
           message: 'logout Successfull',
           duration: 2000
         }).present()

         this.navCtrl.setRoot(LoginregPage);
       
     }
     updateProfile(){
       
     }
  }


