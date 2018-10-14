import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notificacion } from '../../utils/interfaces';

@Component({
  selector: 'app-lista-notificaciones',
  templateUrl: './lista-notificaciones.component.html',
  styleUrls: ['./lista-notificaciones.component.css']
})
export class ListaNotificacionesComponent implements OnInit {

  @Input() public notificaciones: Notificacion[];
  @Output() public reenviarNoti: EventEmitter<Notificacion>;
  @Output() public borrarNoti: EventEmitter<number>;

  constructor() {
    this.reenviarNoti = new EventEmitter();
    this.borrarNoti = new EventEmitter();
  }

  ngOnInit() {
  }

  public reenviar( noti: Notificacion) {
    this.reenviarNoti.emit( noti );
  }

  public borrar( id: number ) {
    this.borrarNoti.emit( id );
  }

}
