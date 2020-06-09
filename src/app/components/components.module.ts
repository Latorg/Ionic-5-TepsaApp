import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { NavBarMenuComponent } from './nav-bar-menu/nav-bar-menu.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { SearchPageModule } from '../pages/search/search.module';
import { SearchPage } from '../pages/search/search.page';
import { PipesModule } from '../pipes/pipes.module';
import { BannerHeaderComponent } from './banner-header/banner-header.component';
import { ContactFabComponent } from './contact-fab/contact-fab.component';
import { ServicioViewComponent } from './servicio-view/servicio-view.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    NavBarMenuComponent,
    ProductoComponent,
    ProductosComponent,
    CarouselComponent,
    BannerHeaderComponent,
    ContactFabComponent,
    ServicioViewComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    NavBarMenuComponent,
    ProductoComponent,
    ProductosComponent,
    CarouselComponent,
    BannerHeaderComponent,
    ContactFabComponent,
    ServicioViewComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
