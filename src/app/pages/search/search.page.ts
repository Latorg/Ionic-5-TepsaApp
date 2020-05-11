import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  productosRestantes: Articulo[] = [];
  productos: Articulo[] = [];
  productosPerPage: number;
  
  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.productosPerPage = AppComponent.isMobileResolution ? 8 : 18;
    this.loadAllProducts();
  }

  loadData( event ) {
    this.loadProductPage( event );
  }

  loadAllProducts( event? ) {
    this.dataService.getProductos().subscribe( resp => {
      if (resp.productos.length === 0) {
        if (event) {
          event.target.disabled = true;
        }
      } else {
        this.productosRestantes.push(...resp.productos);
        this.loadProductPage();
      }
    });
  }

  loadProductPage( event? ) {
    setTimeout(() => {
      this.productos = this.productos.concat(
        this.productosRestantes.splice(
          0, this.productosPerPage));
      if (event) {
        event.target.complete();
        if(this.productosRestantes.length === 0){
          event.target.disabled = true;
        }
      }
    }, 500 );
  }

}
