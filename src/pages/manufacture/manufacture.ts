import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { SubCategoryPage } from '../sub-category/sub-category';

/**
 * Generated class for the ManufacturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-manufacture',
  templateUrl: 'manufacture.html',
})
export class ManufacturePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManufacturePage');
  }
  goToSubcat(){
    this.navCtrl.push(SubCategoryPage)
  }
}
