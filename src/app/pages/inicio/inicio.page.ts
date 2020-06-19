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
      url: '/assets/images/home/delivery green.png',
      title: 'Servicio',
      text: 'Servicio de Entrega (aplican términos y condiciones)'
    },
    {
      url: '/assets/images/home/stock green.png',
      title: 'Inventario',
      text: 'Contamos con un amplio surtido de artículos en existencia'
    },
    {
      url: '/assets/images/home/lowprice green.png',
      title: 'Precios bajos',
      text: 'Los precios más bajos en el mercado'
    },
    {
      url: '/assets/images/home/salesman green.png',
      title: 'Asesoría',
      text: '¿Tienes dudas? Nuestro personal amable y calificado te ayudará'
    },
    {
      url: '/assets/images/home/experience green.png',
      title: 'Experiencia',
      text: 'Contamos con más de 35 años de experiencia en el mercado'
    },
    {
      url: '/assets/images/home/garanty green.png',
      title: 'Garantía',
      text: 'Manejamos productos de la más alta calidad'
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

