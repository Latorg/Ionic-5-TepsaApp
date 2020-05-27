import { Pipe, PipeTransform, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { SubjectService } from '../services/subject.service';

@Pipe({
  name: 'infiniteScrollProducts'
})
export class InfiniteScrollProductsPipe implements PipeTransform {

  pageShown: number;

  constructor(  ) {
  }


  transform(arr: any[], page: number,  searchValue: string): any[] {
    const productosPerPage = AppComponent.isMobileResolution ? 6 : 16;
    if (arr.length > 0 ) {
      arr = arr.filter( ( x, index ) => {
        return index < productosPerPage * page;
      });
    }
    return arr;
  }

}
