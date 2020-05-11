import { Component, OnInit } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { RespuestaProductos, Componente, Articulo } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  

  constructor(private platform: Platform, 
              private iab: InAppBrowser) { }
  ngOnInit() {
    // this.cargarProductos();
  }

  

  enviarWhatsApp() {
    if (this.platform.is('cordova')) {
      const browser = this.iab.create('https://api.whatsapp.com/send?phone=+524448482102', '_system');
    } else {
      window.open('https://api.whatsapp.com/send?phone=+524448482102', '_blank');
    }
  }
}

