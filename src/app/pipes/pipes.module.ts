import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter.pipe';
import { InfiniteScrollProductsPipe } from './infinite-scroll-products.pipe';



@NgModule({
  declarations: [SearchFilterPipe, InfiniteScrollProductsPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SearchFilterPipe,
    InfiniteScrollProductsPipe
  ]
})
export class PipesModule { }
