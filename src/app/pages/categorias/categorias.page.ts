import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  urlImage: string;

  constructor() {}

  ngOnInit() {
    this.urlImage = AppComponent.isMobileResolution ?
      '/assets/images/headers/categorias.png' : '/assets/images/headers/categorias-large.png';
  }

}
