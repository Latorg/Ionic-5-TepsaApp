import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { SubjectService } from '../../services/subject.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  productos: Articulo[] = [];
  searchValue: string;
  reset = false;
  sortValue = '';
  isMobileResolution: boolean;

  constructor(  private dataService: DataService,
                private subjectService: SubjectService) {
    this.isMobileResolution = AppComponent.isMobileResolution;
  }

  ngOnInit() {
    if ( !this.isMobileResolution ) {
      $('#toHeader').appendTo('#searchHeader');
    }
    this.subjectService.currentSearch$.subscribe( res => {
      this.searchValue = res;
      this.loadAllProducts();
    });
  }

  loadAllProducts( ) {
    this.dataService.getProductos().subscribe( res => {
      if ( this.searchValue !== '' ) {
        res = this.filterSearch(res);
        // res = res.filter( x => x.descripcion.toLowerCase().includes( this.searchValue.toLowerCase() ));
      }
      this.productos = [];
      this.productos.push(...res);
      this.cambiarSort();
    });
  }

  filterSearch( resArticulos: Articulo[]): Articulo[] {
    // Search by description
    const resTemp =  resArticulos.filter( x => x.descripcion.toLowerCase().includes( this.searchValue.toLowerCase() ));
    // Search by subcategory
    const wordsToSearch = this.searchValue.split(' ');
    let filterArr = [];
    wordsToSearch.forEach( x => {
      filterArr = resArticulos.filter( y =>
        y.nombreSubcategoria.toLowerCase().includes( x.toLowerCase()) ||
        y.nombreCategoria.toLowerCase().includes( x.toLowerCase()));
      resTemp.push( ...filterArr );
    });
    // Delete duplicates
    const resToReturn = resTemp.filter(  (elem, index, self) => {
      return index === self.indexOf(elem);
    });

    return resToReturn;
  }

  cambiarSort(event?: any) {
    if ( event ) {
      this.sortValue = event.srcElement.value;
    }
    this.reset = false;
    this.sortProducts();
    setTimeout(() => {
      this.reset = true;
    }, 10 );
  }


  sortProducts( ) {
    switch ( this.sortValue ) {
      // ALFABETICAMENTE ASC
      case 'ALP-ASC':
      {
        this.sortASC( );
      }
      break;
      // ALFABETICAMENTE DSC
      case 'ALP-DSC':
      {
        this.productos = this.productos.sort( (a, b) => {
          if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase() ) {
            return -1;
          }
          if (a.descripcion.toLowerCase()  < b.descripcion.toLowerCase() ) {
            return 11;
          }
          // a must be equal to b
          return 0;
        });
      }
      break;
      // POR SUBCATEGORIA
      case 'SUBCAT-ASC':
      {
        this.productos  = this.productos.sort( (a, b) => {
          if (a.nombreSubcategoria.toLowerCase() > b.nombreSubcategoria.toLowerCase() ) {
            return 1;
          }
          if (a.nombreSubcategoria.toLowerCase()  < b.nombreSubcategoria.toLowerCase() ) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }
      break;
      // POR CATEGORIA
      case 'CAT-ASC':
      {
        this.productos  = this.productos.sort( (a, b) => {
          if ( a.nombreCategoria.toLowerCase() === b.nombreCategoria.toLowerCase() ) {
            if (a.nombreSubcategoria.toLowerCase() > b.nombreSubcategoria.toLowerCase() ) {
              return 1;
            }
            if (a.nombreSubcategoria.toLowerCase()  < b.nombreSubcategoria.toLowerCase() ) {
              return -1;
            }
            // a must be equal to b
            return 0;
          }
          if (a.nombreCategoria.toLowerCase() > b.nombreCategoria.toLowerCase() ) {
            return 1;
          }
          if (a.nombreCategoria.toLowerCase()  < b.nombreCategoria.toLowerCase() ) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      }
      break;
      default :
      {
        this.sortASC();
      }
    }
  }

  sortASC() {
    this.productos = this.productos.sort( (a, b) => {
      if (a.descripcion.toLowerCase() > b.descripcion.toLowerCase() ) {
        return 1;
      }
      if (a.descripcion.toLowerCase()  < b.descripcion.toLowerCase() ) {
        return -1;
      }
      return 0;
    });
  }

}
