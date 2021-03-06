import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articulo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private searchSubject = new BehaviorSubject<string>('');
  private servicioSubject = new BehaviorSubject<string>('');
  private pageSubject = new BehaviorSubject<number>(1);

  currentSearch$ = this.searchSubject.asObservable();
  currentPage$ = this.pageSubject.asObservable();
  currentServicio$ = this.servicioSubject.asObservable();

  constructor() { }

  newSearch( search: string ) {
    this.searchSubject.next( search );
  }

  newPage( page: number) {
    this.pageSubject.next( page );
  }
   newServicio( servicio: string ) {
     this.servicioSubject.next( servicio );
   }
}
