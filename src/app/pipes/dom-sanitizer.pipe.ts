import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  constructor( private domSan: DomSanitizer ) {}

  transform( img: string, height: string): any {
    const domImg = `background-image: url('${ img }'); min-height: ${ height }px; max-height: ${ height }px`;
    return this.domSan.bypassSecurityTrustStyle( domImg );
  }

}
