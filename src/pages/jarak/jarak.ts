import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackingService } from '../../tracking/tracking.services';
import  { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the JarakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jarak',
  templateUrl: 'jarak.html',
})
export class JarakPage {
	[x: string]: any;
	// [x: string]: any;
  public reorderIsEnabled= false;
  	tracking: any[];
    users: any;
    public todos=[];
      name: string;



  constructor(public navCtrl: NavController, public navParams: NavParams,public geolocation: Geolocation, public trackingService: TrackingService) {

  }
  ionViewDidLoad(){

  }

  initMap() {

    // this.geolocation.getCurrentPosition().then((position) => {
    //    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //
    //   let mapOptions = {
    //     center: latLng,
    //     zoom: 15,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   }
    //
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //
    // });





    // this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //
    //   zoom: 7,
    //    center: {lat: 45, lng: -87.65}
    // });



  }



}
