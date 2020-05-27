import { Component, OnInit, Input } from '@angular/core';
import { Articulo, Categoria } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { SubjectService } from '../../services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productos-per-categoria',
  templateUrl: './productos-per-categoria.page.html',
  styleUrls: ['./productos-per-categoria.page.scss'],
})
export class ProductosPerCategoriaPage implements OnInit {

  productos: Articulo[] = [];
  pageShown: number;
  productosShown: Articulo[] = [];
  categoria: Categoria;
  subcategoria: Categoria;
  categoriasUrl: string;
  isMobileResolution: boolean;

  constructor(  private dataService: DataService,
                private subjectService: SubjectService,
                private route: ActivatedRoute ) { }

  ngOnInit() {
    
    this.isMobileResolution = AppComponent.isMobileResolution;
    this.categoriasUrl = environment.categoriasUrl;
    this.loadParams(this.route.snapshot.params);
    this.subjectService.currentPage$.subscribe( res => {
      this.pageShown = res;
    });
  }

  loadParams(params) {
    this.dataService.getCategorias().subscribe( res => {
      this.categoria =  res.find(x => x.id.toUpperCase() === params['categoriaID'].toUpperCase());
      this.subcategoria = this.categoria.subcategorias.find( x => x.id.toUpperCase() === params['subcategoriaID'].toUpperCase());
      if ( this.categoria && this.subcategoria ) {
        this.loadAllProducts();
      }
    });
  }

  loadAllProducts( ) {
    this.dataService.getProductos().subscribe( res => {
      const productosPerCategoria = res
                                  .filter(x => x.categoria && x.subcategoria)
                                  .filter(x =>  x.categoria.toUpperCase() === this.categoria.id.toUpperCase() &&
                                                x.subcategoria.toUpperCase() === this.subcategoria.id.toUpperCase());
      this.productos.push(...productosPerCategoria);
    });
  }

  loadData( event ) {
    this.loadProductPage( event );
  }

  loadProductPage( event? ) {
    setTimeout(() => {
      this.subjectService.newPage( this.pageShown + 1);
      if (event) {
        event.target.complete();
      }
    }, 100 );
  }

}
