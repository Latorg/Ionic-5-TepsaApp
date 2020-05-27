import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-subcategorias',
  templateUrl: './subcategorias.page.html',
  styleUrls: ['./subcategorias.page.scss'],
})
export class SubcategoriasPage implements OnInit {
 
  isMobileResolution: boolean;
  categoriaItem: Categoria;
  categoriasUrl: string;

  constructor(  private route: ActivatedRoute,
                private dataService: DataService ) { }

  ngOnInit() {
    this.isMobileResolution = AppComponent.isMobileResolution;
    this.categoriasUrl = environment.categoriasUrl;
    this.route.paramMap.subscribe(params => {
      this.loadCategoria(params.get('categoriaID'));
    });
  }

  loadCategoria(categoriaParam: string) {
    this.dataService.getCategorias().subscribe( res => {
      this.categoriaItem = res.find(x => x.id.toUpperCase() === categoriaParam.toUpperCase());
    });
  }

}
