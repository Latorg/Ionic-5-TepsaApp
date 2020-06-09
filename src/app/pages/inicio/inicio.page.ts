import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  features = [
    {
      url: '/assets/images/home/delivery.png',
      text: 'Servicio de Entrega (aplican términos y condiciones)'
    },
    {
      url: '/assets/images/home/stock.png',
      text: 'Contamos con un amplio surtido de artículos en existencia'
    },
    {
      url: '/assets/images/home/lowprice.png',
      text: 'Los precios más bajos en el mercado'
    },
    {
      url: '/assets/images/home/salesman.png',
      text: 'Tienes dudas? Nuestro personal amable y calificado te ayudará'
    },
  ];

  public isMobileResolution: boolean;
  fontStyle: string;


  constructor() {
    this.isMobileResolution = AppComponent.isMobileResolution;
    this.fontStyle = this.isMobileResolution ? '' : 'xx-large';
  }
  ngOnInit() {
  }
}

