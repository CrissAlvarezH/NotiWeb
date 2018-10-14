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

  public agregarNoti(noti) {
    console.log( JSON.stringify(noti) );

    this.notificaciones.unshift(noti);
  }

}
