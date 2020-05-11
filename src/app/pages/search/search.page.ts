import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  productos: Articulo[] = [];

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  loadData( event ) {
    this.cargarProductos( event );
  }

  cargarProductos( event? ) {
    this.dataService.getProductos()
    .subscribe( resp => {
      this.productos.push(...resp.productos);
      // if (resp.productos.length === 0) {
      //   if (event) {
      //     event.target.disabled = true;
      //   }
      // } else {
      //   this.productos.push(...resp.productos);
      //   if (event) {
      //     event.target.complete();
      //   }
      // }
    });
  }

}
