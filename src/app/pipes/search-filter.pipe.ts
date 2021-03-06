import { Pipe, PipeTransform } from '@angular/core';
import { Articulo } from '../interfaces/interfaces';
import { SubjectService } from '../services/subject.service';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  currentSearch = '';
  constructor ( private subjectService: SubjectService ) {

  }
  transform(  arr: Articulo[], search: string): Articulo[] {

    if ( this.currentSearch !== search ) {
      this.currentSearch = search;
      this.subjectService.newPage(1);
    }
    return arr;
  }

}
