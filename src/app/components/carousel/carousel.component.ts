import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { CarouselSlide } from '../../interfaces/interfaces';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  componentes: Observable<CarouselSlide[]>;
  isMobileResolution: boolean;

  constructor( private dataService: DataService ) {
    this.isMobileResolution = AppComponent.isMobileResolution;
  }

  ngOnInit() {
    this.componentes = this.dataService.getCarousel();
  }

  getMinHeightCarousel() {
      const height =  window.innerWidth / 2.5;
      return { 'min-height': height + 'px', 'max-height': height + 'px' };
  }

}
