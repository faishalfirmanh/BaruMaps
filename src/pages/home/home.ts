import { Component, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import  { NextPage } from '../next/next';
import { Geolocation } from '@ionic-native/geolocation';
import {NgModule} from '@angular/core'; //TAMBAH BARU
import {GeoPage } from '../geo/geo';
// import {RequestOptions, Request, RequestMethod} from '@angular/http';
// import { TrackingPage } from '../tracking/tracking';
import { TrackingService } from '../../tracking/tracking.services';
import { Tracking } from '../../model/tracking.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tracking  : Tracking = new Tracking;

 latitude:number;
  longlitude:number;
  users: any;
  name: string;

  //  openTrack(){
  //     this.navCtrl.push(TrackingPage);
  // }

  openNextPage(){
     this.navCtrl.push(NextPage);
 }
 openTrack(){
   this.navCtrl.push(GeoPage);
 }


  constructor(public navCtrl: NavController,private plt: Platform, public geolocation: Geolocation, public trackingService: TrackingService) {

          this.geolocation.getCurrentPosition().then((resp) => {
            let userLocations = {
              latitude: resp.coords.latitude,
              longlitude : resp.coords.longitude
            }
          console.log("Locations acquired");
          console.log(userLocations);

          this.latitude = resp.coords.latitude
          this.longlitude = resp.coords.longitude
          }).catch((error) => {
            console.log('Error getting location', error);
          });


        }


    saveTracking(): void {
      this.trackingService.createTracking(this.tracking)
          .subscribe( data => {
            console.log("User created successfully.");
          });
      };





}
