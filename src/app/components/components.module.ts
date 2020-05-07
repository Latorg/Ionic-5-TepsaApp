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



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    NavBarMenuComponent,
    ProductoComponent,
    ProductosComponent,
    CarouselComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    NavBarMenuComponent,
    ProductoComponent,
    ProductosComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
