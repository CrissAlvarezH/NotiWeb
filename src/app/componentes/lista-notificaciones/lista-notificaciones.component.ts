import { Component, OnInit, Input } from '@angular/core';
import { ServicioPrincipalService } from '../../servicios/servicio-principal.service';
import { Notificacion } from '../../utils/interfaces';

@Component({
  selector: 'app-lista-notificaciones',
  templateUrl: './lista-notificaciones.component.html',
  styleUrls: ['./lista-notificaciones.component.css']
})
export class ListaNotificacionesComponent implements OnInit {

  @Input() notificaciones: Notificacion[];

  constructor(private _principal: ServicioPrincipalService) { }

  ngOnInit() {
  }

}
