import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificacion } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrincipalService {

  constructor( private http: HttpClient ) { }

  public enviarNotificacion( notificacion: Notificacion, para: string ) {
    const ahora = new Date();

    const url = 'https://fcm.googleapis.com/fcm/send';

    const body = {
        'to' : `/topics/${ para }`,
        'data' : {
            'tituloNoti'  :  notificacion.titulo,
            'descripcionNoti' : notificacion.descripcion,
            'fechaNoti' : `${ ahora.getDay() } del mes ${ ahora.getMonth() } `,
            'tipoNoti': notificacion.tipo
        },
        'priority': 'high'
    };

    const opciones = {
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'key=AIzaSyDJNVzLTUhAVTS2p7CDAjuvMj2-l12P5ks'
      }
    };

    return this.http.post(url, body, opciones);
  }
}
