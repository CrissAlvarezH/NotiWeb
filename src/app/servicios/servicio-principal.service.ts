import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificacion } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrincipalService {

  constructor( private http: HttpClient ) { }


  public enviarNotificacion( notificacion: Notificacion ) {
    const ahora = new Date();
    notificacion.fecha = `${ ahora.getFullYear() }-${ ahora.getMonth() }-${ ahora.getDay() } `;
    notificacion.hora = `${ ahora.getHours() }:${ ahora.getMinutes() }`;

    const body = notificacion;

    const url = 'http://10.10.10.15/noti_server/src/index.php/notificaciones';

    return this.http.post(url, body);
  }

  public getNotificaciones() {
    return this.http.get('http://10.10.10.15/noti_server/src/index.php/notificaciones');
  }

  public borrarNotificacion( id: number ) {
    return this.http.delete(`http://10.10.10.15/noti_server/src/index.php/notificaciones/${ id }`);
  }
}
