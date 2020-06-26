import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { CarouselSlide } from '../../interfaces/interfaces';
import { AppComponent } from '../../app.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  componentes: Observable<CarouselSlide[]>;
  isMobileResolution: boolean;
  pathCarousel: string;
  constructor( private dataService: DataService ) {
    this.isMobileResolution = AppComponent.isMobileResolution;
  }

  ngOnInit() {
    this.componentes = this.dataService.getCarousel();
    this.pathCarousel = environment.carouselUrl;

  }

  getMinHeightCarousel() {
      return window.innerWidth / 2.5;
  }

}
