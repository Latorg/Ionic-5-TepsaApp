import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, Articulo, RespuestaProductos, CarouselSlide } from '../interfaces/interfaces';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) {}

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getProductos() {
    return this.http.get<RespuestaProductos>('/assets/data/productos.json');
  }

  getCarousel() {
    return this.http.get<CarouselSlide[]>('/assets/data/carousel.json');
  }
}
