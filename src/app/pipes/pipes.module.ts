import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter.pipe';
import { InfiniteScrollProductsPipe } from './infinite-scroll-products.pipe';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';



@NgModule({
  declarations: [SearchFilterPipe, InfiniteScrollProductsPipe, DomSanitizerPipe],
  imports: [
    CommonModule
  ],
  exports: [
    SearchFilterPipe,
    InfiniteScrollProductsPipe,
    DomSanitizerPipe
  ]
})
export class PipesModule { }
