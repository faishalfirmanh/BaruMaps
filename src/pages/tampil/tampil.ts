import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackingService } from '../../tracking/tracking.services';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;


/**.
 * Generated class for the TampilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tampil',
  templateUrl: 'tampil.html',
})
export class TampilPage {
TrackingService:any;
users: any;
tracking: any;
latitude: any;
longlitude: any;
markers: any[] = [];
@ViewChild('map')
private _mapElement: ElementRef;
public get mapElement(): ElementRef {
  return this._mapElement;
}
map:any
jenis: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public trackingService: TrackingService, public geolocation: Geolocation) {
    this.users = navParams.get('data'); //jenis ini nanti digunakan untuk tampil {{}} di htmlnya

  }

  getUsers() {
    this.trackingService.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
      this.addMarker();
    });
  }
  loadMap() {

		this.geolocation.getCurrentPosition().then((position) => {
			// let latLng = new google.maps.LatLng(5.899890,95.32330);

			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			let mapOptions = {
				center: latLng,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
			this.getUsers();
		}, (err) => {
			console.log(err);
		});


	}
  ionViewDidLoad() {
    //let inputan = console.log(this.navParams.get('data')) //let nama variabel terserah

    //let name = console.log(this.navParams.get('name'))
    this.loadMap();
    // console.log(this.navParams.get('title'));
  }
  addMarker(): void {
		this.users.map(data => {
			const latLng = new google.maps.LatLng(data.latitude, data.longlitude);

			let marker = new google.maps.Marker({
				map: this.map,
				animation: google.maps.Animation.DROP,
				position: latLng,
			});

			this.markers.push(marker);
		})
	}

}
