import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, Articulo, RespuestaProductos, CarouselSlide, Categoria, Servicio } from '../interfaces/interfaces';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(  private http: HttpClient ) {}

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getProductos() {
    return this.http.get<Articulo[]>('/assets/data/productos.json');
  }

  getCarousel() {
    return this.http.get<CarouselSlide[]>('/assets/data/carousel.json');
  }

  getCategorias() {
    return this.http.get<Categoria[]>('/assets/data/categorias.json');
  }

  getServicios() {
    return this.http.get<Servicio[]>('/assets/data/servicios.json');
  }

}
