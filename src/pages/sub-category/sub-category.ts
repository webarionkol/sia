import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the SubCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-sub-category',
  templateUrl: 'sub-category.html',
})
export class SubCategoryPage {

  cats: any;
  mans: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public api: ApiProvider,
    public loadingCtrl:LoadingController) {

    console.log(this.navParams.get('type'));

    if(this.navParams.get('type') === 'Category') {
      this.getCats();
    } else {
      this.getManufacture();
    }

    
  }

  private getCats() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });loading.present();
    this.api.getCats().then((data: any)=>{
      console.log(data);
      this.cats = data.cats;
      loading.dismiss();
    }).catch(err=>{
      console.log(err);
      loading.dismiss();
    });
  }

  private getManufacture() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });loading.present();
    this.api.getManufacture().then((data: any)=>{
      console.log(data);
      this.mans = data.mans;
      loading.dismiss();
    }).catch(err=>{
      console.log(err);
      loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubCategoryPage');
  }


  goToSubcat(id, type){
   this.navCtrl.push(ProductPage, {data : {id: id, type: type}});
  }

}
