import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-header',
  templateUrl: './banner-header.component.html',
  styleUrls: ['./banner-header.component.scss'],
})
export class BannerHeaderComponent implements OnInit {

  @Input() urlImage: string;
  constructor() { }

  ngOnInit() {}

}
