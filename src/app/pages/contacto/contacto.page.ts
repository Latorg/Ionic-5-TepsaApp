import { Component, OnInit  } from '@angular/core';
import { AppComponent  } from '../../app.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
 })
export class ContactoPage implements OnInit {

  estados = [
    { value: 'AGS', text: 'Aguascalientes'},
    { value: 'BCN', text: 'Baja California' },
    { value: 'BCS', text: 'Baja California Sur' },
    { value: 'CAM', text: 'Campeche' },
    { value: 'CHP', text: 'Chiapas' },
    { value: 'CHI', text: 'Chihuahua' },
    { value: 'DIF', text: 'Ciudad de México' },
    { value: 'COA', text: 'Coahuila' },
    { value: 'COL', text: 'Colima' },
    { value: 'DUR', text: 'Durango' },
    { value: 'GTO', text: 'Guanajuato' },
    { value: 'GRO', text: 'Guerrero' },
    { value: 'HGO', text: 'Hidalgo' },
    { value: 'JAL', text: 'Jalisco' },
    { value: 'MEX', text: 'México' },
    { value: 'MIC', text: 'Michoacán' },
    { value: 'MOR', text: 'Morelos' },
    { value: 'NAY', text: 'Nayarit' },
    { value: 'NLE', text: 'Nuevo León' },
    { value: 'OAX', text: 'Oaxaca' },
    { value: 'PUE', text: 'Puebla' },
    { value: 'QRO', text: 'Querétaro' },
    { value: 'ROO', text: 'Quintana Roo' },
    { value: 'SLP', text: 'San Luis Potosí' },
    { value: 'SIN', text: 'Sinaloa' },
    { value: 'SON', text: 'Sonora' },
    { value: 'TAB', text: 'Tabasco' },
    { value: 'TAM', text: 'Tamaulipas' },
    { value: 'TLX', text: 'Tlaxcala' },
    { value: 'VER', text: 'Veracruz' },
    { value: 'YUC', text: 'Yucatán' },
    { value: 'ZAC', text: 'Zacatecas' }
  ];

  public isMobileResolution: boolean;
  constructor() {
    this.isMobileResolution = AppComponent.isMobileResolution;
  }

  ngOnInit() {
  }
}
