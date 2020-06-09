import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  itemSelected: string;
  servicios = [
    {
      id: 'tableros',
      text: 'Tableros',
      lines: ''
    },
    {
      id: 'ingenieria',
      text: 'Ingeniería',
      lines: ''
    },
    {
      id: 'iluminacion',
      text: 'Iluminación',
      lines: ''
    },
    {
      id: 'energia',
      text: 'Ahorro de energía',
      lines: ''
    },
    {
      id: 'equipoespecial',
      text: 'Equipo Especial',
      lines: 'none'
    }
  ];

  isMobileResolution: boolean;

  constructor(  private subjectService: SubjectService ) { 
    this.isMobileResolution = AppComponent.isMobileResolution;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.itemSelected = '';
  }

  cargarServicio(idServicio) {
    this.itemSelected = idServicio;
  }
}
