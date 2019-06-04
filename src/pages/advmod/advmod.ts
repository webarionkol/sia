import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the AdvmodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-advmod',
  templateUrl: 'advmod.html',
})
export class AdvmodPage {
  img:any;
  myRand: number;
  imgget:any;

  constructor(public rest:ApiProvider,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    
 
    
    
     
   
  }
  ionViewDidEnter() {
  
   }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Customize admoc');
  }

}
