import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  urlImage: string;
  
  public isMobileResolution: boolean;
  constructor() {
    this.isMobileResolution = AppComponent.isMobileResolution;
  }

  ngOnInit() {
    this.urlImage = this.isMobileResolution ?
      '/assets/images/headers/nosotros.png' : '/assets/images/headers/nosotros-large.png';
  }

}
