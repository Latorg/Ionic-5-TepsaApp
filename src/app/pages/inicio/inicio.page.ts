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
      url: '/assets/images/home/salesman green.png',
      title: 'Apoyo técnico',
      text: '¿Necesitas cotizar? ¿Tienes dudas? ¡Llámanos!'
    },
    {
      url: '/assets/images/home/stock green.png',
      title: 'Inventario',
      text: 'Contamos con un amplio surtido de artículos en existencia'
    },
    {
      url: '/assets/images/home/lowprice green.png',
      title: 'Precios bajos',
      text: 'Encontrarás el mejor precio del mercado'
    },
    {
      url: '/assets/images/home/experience green.png',
      title: 'Experiencia',
      text: 'Más de 35 años en el mercado nos avalan'
    },
    {
      url: '/assets/images/home/delivery green.png',
      title: 'Servicio',
      text: 'Servicio de Entrega (aplican términos y condiciones)'
    },
    {
      url: '/assets/images/home/garanty green.png',
      title: 'Garantía',
      text: 'Manejamos marcas reconocidas de material eléctrico'
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

