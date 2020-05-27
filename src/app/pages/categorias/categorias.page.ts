import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DataService } from '../../services/data.service';
import { Categoria } from '../../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categoriasUrl: string;
  categorias: Categoria[] = [];

  constructor( private dataService: DataService) {}

  ngOnInit() {
    this.categoriasUrl = environment.categoriasUrl;
    this.loadAllCategories();
  }

  loadAllCategories( ) {
    this.dataService.getCategorias().subscribe( res => {
      this.categorias.push(...res);
    });
  }
}
