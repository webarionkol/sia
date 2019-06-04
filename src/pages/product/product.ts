import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
import { ActionSheetController } from 'ionic-angular';
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

  constructor(public actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  goToProduct(){
    this.navCtrl.push(ProductDetailsPage)
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
