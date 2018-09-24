import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NextPage } from '../pages/next/next';
import { GeoPage } from '../pages/geo/geo';
import { ListProvider } from '../providers/list/list';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TrackingService } from '../tracking/tracking.services';
import { JarakPage } from '../pages/jarak/jarak';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NextPage,
    GeoPage,
    JarakPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NextPage,
    JarakPage,
    GeoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    TrackingService,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
