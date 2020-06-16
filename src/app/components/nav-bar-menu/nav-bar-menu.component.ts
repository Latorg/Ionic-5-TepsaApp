import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { SearchPage } from '../../pages/search/search.page';
import { SubjectService } from '../../services/subject.service';
import { IonInput } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrls: ['./nav-bar-menu.component.scss'],
})
export class NavBarMenuComponent implements OnInit {
  componentes: Observable<Componente[]>;
  searchValue: string;
  menuSelected: string;
  
  @ViewChild('searchInput', {static: false}) searchIpt: any;

  constructor(  private dataService: DataService,
                private subjectService: SubjectService,
                private el: ElementRef,
                public route: Router ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    this.subjectService.currentSearch$.subscribe( res => {
      this.searchValue = res;
    });
  }


  changeSearch(search: string) {
    this.subjectService.newSearch(search);
    this.searchIpt.nativeElement.value = '';
    this.route.navigateByUrl('/buscar');
  }
}
