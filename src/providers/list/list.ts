import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListProvider {

  apiUrl = 'http://localhost:8080';
  data ={"name":"", "latitude":"","longlitude":""};

  constructor(public http: HttpClient) {
    console.log('Hello ListProvider Provider');
  }

  getUsers() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/item').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}


}
