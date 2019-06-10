import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  product: any;
  productImgs: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api: ApiProvider,
    public loadingCtrl:LoadingController) {

    console.log(this.navParams.get('product'));
    this.product = this.navParams.get('product');

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });loading.present();
    this.api.getProductImgs(this.product.id).then((data: any)=>{
      console.log(data);
      this.productImgs = data.imgs;
      loading.dismiss();
    }).catch(err=>{
      console.log(err);
      loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

}
