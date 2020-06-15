import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  // static isMobileResolution: boolean = window.innerWidth < 992 ? true : false;
  public static isMobileResolution: boolean;

  initializeApp() {
    this.platform.ready().then(() => {
      AppComponent.isMobileResolution = !this.platform.is('desktop');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 
}
