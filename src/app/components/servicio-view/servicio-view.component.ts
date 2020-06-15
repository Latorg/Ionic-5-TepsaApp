import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../../app.component';
import { DataService } from '../../services/data.service';
import { Servicio } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-servicio-view',
  templateUrl: './servicio-view.component.html',
  styleUrls: ['./servicio-view.component.scss'],
})
export class ServicioViewComponent implements OnInit {

  isMobileResolution: boolean;
  @Input() servicioSelected: string;
  @Input() subservicios: Servicio[];
  @Output() sendSubservicio = new EventEmitter<Servicio>();

  constructor( private modalCtrl: ModalController ) {
    this.isMobileResolution = AppComponent.isMobileResolution;
   }

   
   ngOnInit() {
  }


  openModal( subservicio: Servicio ) {
    this.sendSubservicio.emit( subservicio );
  }

  getHeightCarousel() {
    const height =  window.innerWidth * (AppComponent.isMobileResolution ? 0.8 : 0.2) / 2;
    return { 'min-height': height + 'px', 'max-height': height + 'px' };
  }
}
