import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  
  @Input() productos: Articulo[] = [];

  constructor() { }

  ngOnInit() {}

}
