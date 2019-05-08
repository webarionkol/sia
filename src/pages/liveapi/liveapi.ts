import { Component } from '@angular/core';
import { NavController, ModalController, Platform, LoadingController, Loading } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ApiProvider } from '../../providers/api/api';
import { AdvmodPage } from '../advmod/advmod';
import { EventPage } from '../event/event';
import { NewsPage } from '../news/news';
import { CategoryPage } from '../category/category';


/**
 * Generated class for the LiveapiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-liveapi',
  templateUrl: 'liveapi.html',
})
export class LiveapiPage {
  metal_cost:any = false;
  metals:any = false;
  UserData:any;
  old:any = false; 
  loading:Loading;
  banners:any;
  whatsapp:any;
  fb:any;
  marqu:any;
  intervals:any;
  modalMy: any;
  constructor( public navCtrl: NavController,
    public modal:ModalController,
    public api: ApiProvider,
    public loadingCtrl:LoadingController,public platform:Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveapiPage');
  }
  ionViewWillEnter() {

  
 
    this.api.getBanner().then((data:any) => {
     this.banners=data['banners'];
     
      console.log(this.banners);
      // this.metal_cost  = data.metal_cost;
    });
    this.api.addRate().then((data:any) => {
      
      console.log(data);
      this.metal_cost  = data.metal_cost;
    }).catch(err=>{
      console.log(JSON.stringify(err))
    })

    this.getRates();
  }

  getRates(){
   
    this.old = this.metals;

    this.api.rates().then((data) => {
     
      if(data)
      this.metals = data;
    }, (err) => {
     console.log(err);
    })

        setTimeout( () => {
           this.getRates();
      }, 2000);   
     
  }
  sum(a, b){
    return parseInt(a) + parseInt(b);
  }

}
