import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
baddress:any;
jaddress:any;
b1call:any;
b2call:any;
j11call:any;
j2call:any;
bemail:any;
jemail:any;
name:any;
fb:any;
twit:any;
email:any;

data: any = {name: '', email: '', message: ''};

  constructor(
    public rest:ApiProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl:LoadingController,
    public toast: ToastController) {
    this.rest.getContact().then(data=>{
      console.log(data)
      this.b1call=data['contactus'][1].content_value;
      this.b2call=data['contactus'][6].content_value;
      this.j11call=data['contactus'][8].content_value;
      this.j2call=data['contactus'][10].content_value;
      this.baddress=data['contactus'][0].content_value;
      this.jaddress=data['contactus'][7].content_value;
      this.bemail=data['contactus'][2].content_value;
      this.jemail=data['contactus'][9].content_value;
      console.log(data)
    }).catch(err=>{
      console.log(err)
    })
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  submit() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });loading.present();
    this.rest.setInquiry(this.data).then((data: any)=>{
      console.log(data);
     let toast =  this.toast.create({
        message: data.message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      loading.dismiss();
    }).catch(err=>{
      console.log(err);
      loading.dismiss();
    });
  }

}
