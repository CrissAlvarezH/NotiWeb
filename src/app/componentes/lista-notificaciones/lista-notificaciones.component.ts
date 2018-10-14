import { Component, OnInit } from '@angular/core';
import { ServicioPrincipalService } from '../../servicios/servicio-principal.service';
import { Notificacion } from '../../utils/interfaces';

@Component({
  selector: 'app-lista-notificaciones',
  templateUrl: './lista-notificaciones.component.html',
  styleUrls: ['./lista-notificaciones.component.css']
})
export class ListaNotificacionesComponent implements OnInit {
  public cargandoNotis = false;

  public notificaciones: Notificacion[];

  constructor(private _principal: ServicioPrincipalService) { }

  ngOnInit() {
    this.cargandoNotis = true;

    this._principal.getNotificaciones()
          .subscribe( (resp) => {
            console.log(`Notificaciones `, resp['respuesta']);

            this.notificaciones = resp['respuesta'];

            this.cargandoNotis = false;
          }, err => {
            console.log(`ERROR AL PEDIR LAS NOTIFICACIONES ${ err }`);

            this.cargandoNotis = false;
          });
  }

}
