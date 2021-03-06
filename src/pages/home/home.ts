import { Component } from '@angular/core';
import { NavController, ModalController, Platform, LoadingController, Loading } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ApiProvider } from '../../providers/api/api';
import { AdvmodPage } from '../advmod/advmod';
import { EventPage } from '../event/event';
import { NewsPage } from '../news/news';
import { CategoryPage } from '../category/category';
import { LiveapiPage } from '../liveapi/liveapi';
import { BankPage } from '../bank/bank';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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
  constructor(
    public navCtrl: NavController,
    public modal:ModalController,
    public api: ApiProvider,
    public loadingCtrl:LoadingController,public platform:Platform ) 
  {

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });loading.present();
    this.api.getContact().then(data=>{
      console.log(data)
      this.whatsapp=data['contactus'][5].content_value;
      this.fb=data['contactus'][3].content_value;
    
      console.log(data)
    }).catch(err=>{
      console.log(err)
    }).then(()=>{
      loading.dismiss();
    })
   
    this.api.getMarquee().then(data=>{
      
        this.marqu=data['page_det'].content_value;
        console.log(this.marqu)
      })

    this.UserData = JSON.parse(localStorage.getItem('UserData'));

          
  }
   
  
  ionViewWillEnter() {

  
 
    this.api.getBanner().then((data:any) => {
     this.banners=data['banners'];
     
      console.log(this.banners);
      // this.metal_cost  = data.metal_cost;
    });
    

  }


 
  login(){
    this.navCtrl.push(ProfilePage)
  }


  noti(){
   this.navCtrl.push(AdvmodPage)
  }
  live(){
    this.navCtrl.push(LiveapiPage)
  }
  categoryPage(){
    this.navCtrl.push(CategoryPage)
  }
}
