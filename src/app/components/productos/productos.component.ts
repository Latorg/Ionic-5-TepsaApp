import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Articulo } from '../../interfaces/interfaces';
import { SubjectService } from '../../services/subject.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit, AfterContentInit {
  
  pageShown: number;
  @Input() productos: Articulo[];
  productosShown: Articulo[] = [];
  searchValue: string;
  
  isMobileResolution: boolean;

  constructor( private subjectService: SubjectService ) {
   }

  ngOnInit() {
    
    this.isMobileResolution = AppComponent.isMobileResolution;
    this.subjectService.currentSearch$.subscribe( res => {
      this.searchValue = res;
    });
  }

  ngAfterContentInit() {
    this.subjectService.currentPage$.subscribe( res => {
      this.pageShown = res;
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
