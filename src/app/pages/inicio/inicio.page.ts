import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  features = [
    {
      url: '/assets/images/home/delivery.png',
      text: 'Contamos con servicio de entrega a domicilio.'
    },
    {
      url: '/assets/images/home/stock.png',
      text: 'Contamos con gran inventario y tiempos de entrega ágiles.'
    },
    {
      url: '/assets/images/home/lowprice.png',
      text: 'Los precios más bajos en el mercado.'
    },
    {
      url: '/assets/images/home/salesman.png',
      text: 'Personal calificado para ayudar en tus compras.'
    },
  ];

  public isMobileResolution: boolean;
  fontStyle: string;
  
  constructor() {
    this.isMobileResolution = AppComponent.isMobileResolution;
    this.fontStyle = this.isMobileResolution ? '' : 'xx-large';
  }
  ngOnInit() {}

 

  
}

