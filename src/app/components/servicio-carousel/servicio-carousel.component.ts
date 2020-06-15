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

  getHeightCarousel() {
    const height =  window.innerWidth * (AppComponent.isMobileResolution ? 0.9 : 0.7) / 2.2;
    return { 'min-height': height + 'px', 'max-height': height + 'px' };
  }

}
