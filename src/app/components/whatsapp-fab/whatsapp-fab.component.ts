import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-whatsapp-fab',
  templateUrl: './whatsapp-fab.component.html',
  styleUrls: ['./whatsapp-fab.component.scss'],
})
export class WhatsappFabComponent implements OnInit {

  constructor(  private platform: Platform,
                private iab: InAppBrowser) { }

  ngOnInit() {}

  enviarWhatsApp() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://api.whatsapp.com/send?phone=+524448482102', '_system');
    } else {
      window.open('https://api.whatsapp.com/send?phone=+524448482102', '_blank');
    }
  }

}
