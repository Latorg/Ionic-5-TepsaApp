import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from '../../interfaces/interfaces';
import { ActionSheetController } from '@ionic/angular';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  constructor(  private asCtrl: ActionSheetController,
                private http: HttpClient ) { }

  @Input() producto: Articulo;

  ngOnInit() {}

  downloadFicha( urlToFicha: string, filename: string ) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(urlToFicha, { headers, responseType: 'blob' }).subscribe( data => {
      const blob = new Blob([data], {type: 'application/pdf'});
      FileSaver.saveAs(blob, filename);
    });
  }
  
}
