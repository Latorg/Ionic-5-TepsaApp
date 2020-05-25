import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact-fab',
  templateUrl: './contact-fab.component.html',
  styleUrls: ['./contact-fab.component.scss'],
})
export class ContactFabComponent implements OnInit {

  constructor(  private platform: Platform,
                private iab: InAppBrowser,
                private call: CallNumber,
                private email: EmailComposer) { }

  ngOnInit() {}

  enviarWhatsApp() {
    if (this.platform.is('cordova')) {
      this.iab.create('https://api.whatsapp.com/send?phone=+524448482102', '_system');
    } else {
      window.open('https://api.whatsapp.com/send?phone=+524448482102', '_blank');
    }
  }

  llamarTelefono() {
    if (this.platform.is('cordova')) {
      this.call.callNumber('+524448482102', true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
    } else {
      window.location.href = 'tel:+52-444-848-2102';
    }
  }

  enviarCorreo() {
    if (this.platform.is('cordova')) {
      this.email.open({
        to: 'ventas@tecnopotosi.com.mx',
        cc: 'sistemas@tecnopotosi.com.mx',
        subject: 'Cordova Icons',
        body: 'How are you? Nice greetings from Leipzig'
      });
    } else {
      window.location.href = 'mailto:ventas@tecnopotosi.com.mx';
    }
  }
}
