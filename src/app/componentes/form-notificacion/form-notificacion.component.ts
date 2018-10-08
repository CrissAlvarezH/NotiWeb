import { ServicioPrincipalService } from './../../servicios/servicio-principal.service';
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

  constructor( private _principal: ServicioPrincipalService) { }

  ngOnInit() {
  }

  enviar() {
    this._principal.enviarNotificacion(this.notificacion, this.para)
      .subscribe( resp => {
        console.log(`Respuesta de Firebase al enviar notificacion ${ JSON.stringify(resp) }`);
      }, err => {
        console.log(`Error al enviar notificación ${ JSON.stringify(err) }`);
      });
  }

}
