import { Component, OnInit } from '@angular/core';
import { Notificacion } from '../../utils/interfaces';

@Component({
  selector: 'app-form-notificacion',
  templateUrl: './form-notificacion.component.html',
  styleUrls: ['./form-notificacion.component.css']
})
export class FormNotificacionComponent implements OnInit {

  public para = 'PROFESORES';

  public notificacion: Notificacion = {
    titulo: '',
    descripcion: '',
    tipo: 1,
    fecha: ''
  };

  constructor() { }

  ngOnInit() {
  }

  enviar() {
    console.log( JSON.stringify( this.notificacion ) );
  }

}
