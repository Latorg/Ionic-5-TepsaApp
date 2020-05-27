import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosPerCategoriaPage } from './productos-per-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPerCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPerCategoriaPageRoutingModule {}
