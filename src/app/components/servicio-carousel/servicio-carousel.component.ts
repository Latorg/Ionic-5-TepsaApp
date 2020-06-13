import { Component, OnInit, Input } from '@angular/core';
import { CarouselSlide } from '../../interfaces/interfaces';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-servicio-carousel',
  templateUrl: './servicio-carousel.component.html',
  styleUrls: ['./servicio-carousel.component.scss'],
})
export class ServicioCarouselComponent implements OnInit {

  @Input() carouselImages: CarouselSlide[];
  @Input() servicio: string;
  @Input() subservicio: string;

  constructor() { }

  ngOnInit() {}

  getMinHeightCarousel() {
    return AppComponent.isMobileResolution ?
      { 'min-height': '160px', 'max-height': '160px'} :
      { 'min-height': '350px', 'max-height': '350px'};
  }

}
