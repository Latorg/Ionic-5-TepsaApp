import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DataService } from '../../services/data.service';
import { Servicio } from '../../interfaces/interfaces';

@Component({
  selector: 'app-servicio-view',
  templateUrl: './servicio-view.component.html',
  styleUrls: ['./servicio-view.component.scss'],
})
export class ServicioViewComponent implements OnInit {

  isMobileResolution: boolean;
  @Input() servicioSelected: string;
  @Input() subservicios: Servicio[];

  constructor( ) {
    this.isMobileResolution = AppComponent.isMobileResolution;
   }

  ngOnInit() {}


}
