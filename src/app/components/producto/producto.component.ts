import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  constructor() { }

  @Input() producto: Articulo;

  ngOnInit() {}

  verProducto() {

  }

  lanzarMenu() {

  }
}
