import { Component, OnInit } from '@angular/core';
import { ServicioPrincipalService } from '../../servicios/servicio-principal.service';
import { Notificacion } from '../../utils/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public notificaciones: Notificacion[];

  public cargandoNotis = false;
  public cargandoEnvio = false;

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

  public reenviarNoti(noti) {

    this._principal.enviarNotificacion(noti)
      .subscribe( (resp: any) => {

        if ( resp.okay ) {
          // Creamos un nuevo objeto para no mantener la referencia en caso de que no se haya cambiado
          // los valores en el formuario, para así no alterar la referencia que ya está en el objeto
          const notificacion: Notificacion = {
            id: resp.respuesta,
            titulo: noti.titulo,
            descripcion: noti.descripcion,
            tipo: noti.tipo,
            destinatario: noti.destinatario
          };

          // agregamos la notificacion al inicio del array
          this.notificaciones.unshift(notificacion);

        } else {
          console.log(`Error`);
        }

      }, err => {
        console.log(`Error al enviar notificación ${ JSON.stringify(err) }`);

      });
  }

  public enviarNoti(noti) {
    this.cargandoEnvio = true;

    this._principal.enviarNotificacion(noti)
      .subscribe( (resp: any) => {
        console.log(`RESPUESTA AL ENVIAR `, JSON.stringify(resp));

        if ( resp.okay ) {
          // Creamos un nuevo objeto para no mantener la referencia en caso de que no se haya cambiado
          // los valores en el formuario, para así no alterar la referencia que ya está en el objeto
          const notificacion: Notificacion = {
            id: resp.respuesta,
            titulo: noti.titulo,
            descripcion: noti.descripcion,
            tipo: noti.tipo,
            destinatario: noti.destinatario
          };

          // agregamos la notificacion al inicio del array
          this.notificaciones.unshift(notificacion);

          console.log(`NOTIFICACIONES`, JSON.stringify(this.notificaciones));

        } else {
          console.log(`Error`);
        }

        this.cargandoEnvio = false;
      }, err => {
        console.log(`Error al enviar notificación ${ JSON.stringify(err) }`);

        this.cargandoEnvio = false;
      });
  }


  public borrarNoti( id ) {
    this._principal.borrarNotificacion(id)
      .subscribe( (resp: any) => {
        if ( resp.okay ) {
          this.notificaciones = this.notificaciones.filter( noti => noti.id !== id );
        }
      }, err => {

      });
  }

}
