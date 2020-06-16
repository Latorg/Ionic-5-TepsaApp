import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DataService } from '../../services/data.service';
import { Servicio } from '../../interfaces/interfaces';
import { take } from 'rxjs/operators';

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
  subservicios: Servicio[] = [];
  isMobileResolution: boolean;
  animationClass = '';
  subservicioSelected: Servicio = {};

  constructor(  private dataService: DataService ) {
    this.isMobileResolution = AppComponent.isMobileResolution;
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.itemSelected = '';
    this.subservicioSelected = {};
    this.subservicios = [];
    // console.log($('#serviciosDetailsModal').length);
    $('#serviciosDetailsModal').appendTo('body');
  }

  // ionViewWillLeave() {
  //   $('#serviciosDetailsModal').remove();
  // }

  cargarServicio(idServicio, event?) {
    if ( event ) {
      this.itemSelected = event.detail.value.id;
    } else {
      if ( this.itemSelected !== '' && idServicio === this.itemSelected ) {
        return;
      }
      this.itemSelected = idServicio;
    }
    this.subservicios = [];
    this.loadSubservicios();
  }

  loadSubservicios( ) {
    this.dataService.getServicios().pipe(take(1)).subscribe( res => {
      const subserviciotemp = [...res];
      this.subservicios = subserviciotemp.filter(x => x.idServicioParent === this.itemSelected );
    });
  }

  getSubServicio( e ) {
    this.subservicioSelected = e;
  }
}
