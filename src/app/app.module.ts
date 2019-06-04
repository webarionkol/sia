import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';
import { AlertPage } from '../pages/alert/alert';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { EventPage } from '../pages/event/event';
import { BankPage } from '../pages/bank/bank';
import { ContactPage } from '../pages/contact/contact';
import { NewsPage } from '../pages/news/news';
import { EventlistPage } from '../pages/eventlist/eventlist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { OneSignal } from '@ionic-native/onesignal';
import { AboutappPage } from '../pages/aboutapp/aboutapp';
import { AdvmodPage } from '../pages/advmod/advmod';
import { AboutdetlsPage } from '../pages/aboutdetls/aboutdetls';
import { TermsPage } from '../pages/terms/terms';
import { MeetteamPage } from '../pages/meetteam/meetteam';
import { CategoryPage } from '../pages/category/category';
import { SubCategoryPage } from '../pages/sub-category/sub-category';
import { ProductPage } from '../pages/product/product';
import { ProductDetailsPage } from '../pages/product-details/product-details';

import { SelectSearchableModule } from 'ionic-select-searchable';
import { ManufacturePage } from '../pages/manufacture/manufacture';
// import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { LoginregPage } from '../pages/loginreg/loginreg';


import { LiveapiPage } from '../pages/liveapi/liveapi';

import { RestProvider } from '../providers/rest/rest';
// import { Network } from '@ionic-native/network/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginregPage,
    LiveapiPage,
    LoginPage,
    OtpPage,
    ListPage,
    AboutdetlsPage,
    TermsPage,
    NewsPage,
    AboutappPage,
    EventlistPage,
    AdvmodPage,
    MeetteamPage,
    AlertPage,
    AboutusPage,
    EventPage,
    BankPage,
    ContactPage,
    CategoryPage,
    ManufacturePage,
    SubCategoryPage,
    ProductPage,
    ProductDetailsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MeetteamPage,
    OtpPage,
    ListPage,
    AdvmodPage,
    LiveapiPage,
    NewsPage,
    EventlistPage,
    AboutappPage,
    AboutdetlsPage,
    TermsPage,
    LoginregPage,
    CategoryPage,
    AlertPage,
    AboutusPage,
    EventPage,
    BankPage,
    ManufacturePage,
    ContactPage,
    SubCategoryPage,
    ProductPage,
    ProductDetailsPage
  ],
  providers: [
    StatusBar,
    OneSignal,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,

  

    RestProvider,
  
    
  ]
})
export class AppModule {}
