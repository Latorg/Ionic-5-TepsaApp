import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  productos: Articulo[] = [];
  searchValue: string;
  
  constructor(  private dataService: DataService,
                private subjectService: SubjectService ) {
    this.loadAllProducts();
  }

  ngOnInit( search?: string) {
    this.subjectService.currentSearch$.subscribe( res => {
      this.searchValue = res;
    });
  }

  loadAllProducts( ) {
    this.dataService.getProductos().subscribe( res => {
      this.productos.push(...res);
    });
  }

}
