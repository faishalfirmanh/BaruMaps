import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackingService } from '../../tracking/tracking.services';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
// declare var geocoder;
// declare var map;
/**
* Generated class for the GeoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
	selector: 'page-geo',
	templateUrl: 'geo.html',
})
export class GeoPage {
	TrackingService: any;
	users: any;
	ListProvider: any;
	tracking: any[];
	latitude: number;
	longlitude: number;
	markers: any[] = [];

	@ViewChild('map')
	private _mapElement: ElementRef;
	public get mapElement(): ElementRef {
		return this._mapElement;
	}
	map:any;

	constructor(public navCtrl: NavController,public navParams: NavParams,public trackingService: TrackingService, public geolocation: Geolocation) {

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
			//let latLng = new google.maps.LatLng(5.899890,95.323302);
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

	ionViewDidLoad(){
		this.loadMap();
	}

	addInfoWindow(marker, content){

		let infoWindow = new google.maps.InfoWindow({
			content: content
		});

		google.maps.event.addListener(marker, 'click', () => {
			infoWindow.open(this.map, marker);
		});

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
