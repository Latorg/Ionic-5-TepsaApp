import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-nav-bar-menu',
  templateUrl: './nav-bar-menu.component.html',
  styleUrls: ['./nav-bar-menu.component.scss'],
})
export class NavBarMenuComponent implements OnInit {
  componentes: Observable<Componente[]>;
  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}
