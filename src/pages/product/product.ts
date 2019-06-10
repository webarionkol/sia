import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
import { ActionSheetController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  products: any;
  data: any; 

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider,
    public loadingCtrl:LoadingController) {

    console.log(this.navParams.get('data'));
    this.data = this.navParams.get('data');

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });loading.present();
    this.api.getProducts(this.data).then((data: any)=>{
      console.log(data);
      this.products = data.products;
      loading.dismiss();
    }).catch(err=>{
      console.log(err);
      loading.dismiss();
    });
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  goToProduct(product){
    this.navCtrl.push(ProductDetailsPage, {product: product})
  }
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Sort and Filter',
      buttons: [
        {
          text: 'Manufacture',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Products',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
