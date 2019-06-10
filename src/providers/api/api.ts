import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/ 
@Injectable()
export class ApiProvider {

  // apiUrl:string = 'http://anjanigold.dot2door.in/welcome/';
  apiUrl:string= 'http://siyaramjewels.com/welcome/'
  constructor(public http: HttpClient,public events: Events) {
    console.log('Hello ApiProvider Provider');
  }

  rates()  
  { 
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'liveRates')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addRate()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'addRate')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getStateCity()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'stateCity')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getEvents()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getEvents')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getNotifications()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getNotifications')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAnalysis()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getAnalysis')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getBanner()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getBanners')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getAdv()  
  {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getAds')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  signIn(data){

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'signIn', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  login(data)  
  {
    var formData = new FormData();
    formData.append('name', data.name);
    formData.append('firm_name', data.firmName);
    formData.append('mobile', data.mobile);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('city', data.city);
    formData.append('state', data.state);
    formData.append('pin_code', data.pincode);
    formData.append('address', data.address);
    console.log(data);
   // console.log(formData);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'login', formData)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getAboutUs(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getAboutUs')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getTerms(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getTnC')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getContact(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getContact')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  getMeetTeam(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getTeam')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  Bank(){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'getBank')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
  customOrder(data){
   console.log(data)
  var formData = new FormData();
  formData.append('message', data.message);
  console.log(data);
 // console.log(formData);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'customOrder', formData)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
uplodeimage(data){
  var formData = new FormData();
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'userFiles', formData)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}




resend(data){
  console.log(data)
  var formData = new FormData();
  formData.append('mobile', data);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'resendOtp', formData)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}
getMarquee(){
 
  return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+'getMarquee')
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

getCats()  
{
  return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+'getCategory')
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

getManufacture()  
{
  return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl+'getManufacture')
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

getProducts(data){
  console.log(data)
  var formData = new FormData();
  formData.append('id', data.id);
  formData.append('type', data.type);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'getProducts', formData)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}


getProductImgs(id){
  var formData = new FormData();
  formData.append('id', id);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'getProductImgs', formData)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}


setInquiry(data){
  var formData = new FormData();
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('message', data.message);
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'setInquiry', formData)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
