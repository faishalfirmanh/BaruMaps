import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, reorderArray } from 'ionic-angular';
// import { ListProvider } from '../../providers/list/list';
import { TrackingService } from '../../tracking/tracking.services';
import { HomePage } from '../home/home';
import { GeoPage } from '../geo/geo';
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
	// alertController: any;
public reorderIsEnabled= false;
	tracking: any[];
  users: any;
  public todos=[];
    name: string;
    lihatSession(){
       this.navCtrl.push(GeoPage);
    }
  constructor(public navCtrl: NavController, public navParams: NavParams,  public trackingService: TrackingService, private alertController: AlertController) {
   this.getUsers();
  // this.ionViewDidLoad();
  }
    goToArchivePage(){
      this.navCtrl.push(GeoPage);
    }


    toggleReorder(){
      this.reorderIsEnabled= !this.reorderIsEnabled;
    }
    itemReordered($event){
      reorderArray(this.todos, $event);

    }
    openTodoAlert(){
    	let addTodoAlert = this.alertController.create({
    		title:"Add A todo",
    		message:"Enter your todo",
    		inputs:[
    		{
    			type:"text",
    			name:"addTodoInput"
    		}],
    		buttons:[
    		{
    			text:"Cancel"
    		},
    		{
    			text:"Add Todo",
    			handler:(inputData)=>{
    				let todoText;
    				todoText= inputData.addTodoInput;
    				this.todos.push(todoText);
    			}

    		}]
    	});
    	addTodoAlert.present()
    }



  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingPage');
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
