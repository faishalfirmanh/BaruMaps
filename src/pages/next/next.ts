import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, reorderArray, ToastController } from 'ionic-angular';
// import { ListProvider } from '../../providers/list/list';
import { TrackingService } from '../../tracking/tracking.services';
import { GeoPage } from '../geo/geo';
import { TampilPage } from '../tampil/tampil';
import { SelectSearchableComponent } from 'ionic-select-searchable';

/**
 * Generated class for the NextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-next',
  templateUrl: 'next.html',
})
export class NextPage {

	[x: string]: any;
	// alertController: any;/
 @ViewChild('myselect') selectComponent: SelectSearchableComponent;
	tracking: any[];
  //users: any;
  //
  peta = null;
  user = null;
  userIds = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,  public trackingService: TrackingService, private toastCtrl: ToastController) {
   this.getUsers();

  }
  userChanged(event: { component: SelectSearchableComponent, value: any}) {
    // User was selected
  }
  onClose() {
   let toast = this.toastCtrl.create({
     message: 'Thanks for your selection',
     duration: 2000
   });
   toast.present();
 }

 openFromCode() {
   this.selectComponent.open();
 }

    //
    // bukaLokasi(jenis, kelamin,maps){
    //   jenis = jenis || 'inputan kosong'
    //   kelamin = 'sayang'
    //   this.navCtrl.push(TampilPage,{
    //   data:jenis
    //   });
    // }
    // users =[{
    //   id:1,
    //   name:'mojokerto',
    //   lat:123
    // },
    // {
    //   id:2,
    //   name:'surabya',
    //   lat:101
    // },
    // {
    //   id:3,
    //   name:'gombek',
    //   lat:555
    // }]

    bukaLokasi(users){

      users = users || 'inputan kosong'
      this.navCtrl.push(TampilPage,{
      data:users
      });
    }



  ionViewDidLoad() {
   this.trackingService.getTracking().subscribe(
        data => {this.tracking = data;
          console.log(data);
        });
  }

  getUsers() {
this.trackingService.getUsers()
.then(data => {
  this.users = data;
  console.log(this.users);
});
}








}
