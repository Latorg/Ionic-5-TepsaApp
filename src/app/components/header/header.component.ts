import { Component, OnInit, Input, ViewChild, Injectable } from '@angular/core';
import { IonSearchbar, IonButton, IonHeader } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  @ViewChild('mainSearchBar', { static: true }) searchBar: IonSearchbar;
  @ViewChild('mainSearchIcon', { static: false }) searchIcon: IonButton;
  public displaySearchBar: string;
  public displaySearchIcon: string;
  public displayMobile: string;
  public isMobileResolution: boolean;
  
  constructor() {
    this.isMobileResolution = window.innerWidth < 992 ? true : false;
    this.displayMobile = window.innerWidth < 992 ? '' : 'none';
  }

  ngOnInit() {
    this.displaySearchBar = 'none';
  }

  openSearchBar() {
    this.displaySearchBar = '';
    this.displaySearchIcon = 'none';
    setTimeout(() => this.searchBar.setFocus(), 10);
  }

  closeSearchBar() {
    this.displaySearchBar = 'none';
    this.displaySearchIcon = '';
  }
}
