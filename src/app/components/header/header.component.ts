import { Component, OnInit, Input, ViewChild, Injectable } from '@angular/core';
import { IonSearchbar, IonButton, IonHeader } from '@ionic/angular';
import { AppComponent } from '../../app.component';
import { SubjectService } from '../../services/subject.service';
import { Router } from '@angular/router';

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
  
  constructor(  private subjectService: SubjectService,
                private router: Router ) {
    this.isMobileResolution = AppComponent.isMobileResolution;
    this.displayMobile = AppComponent.isMobileResolution ? '' : 'none';
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

  changeSearch() {
    this.subjectService.newSearch(this.searchBar.value);
    this.searchBar.value = '';
    this.closeSearchBar();
    this.router.navigate(['/search']);
  }
}
