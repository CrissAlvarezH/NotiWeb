import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notificacion, Noticia } from '../utils/interfaces';

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

    const url = 'http://192.168.137.1/NotiServer/src/index.php/notificaciones';

    return this.http.post(url, body);
  }

  public getNotificaciones() {
    return this.http.get('http://192.168.137.1/NotiServer/src/index.php/notificaciones');
  }

  public borrarNotificacion( id: number ) {
    return this.http.delete(`http://192.168.137.1/NotiServer/src/index.php/notificaciones/${ id }`);
  }

  public enviarNoticia( noticia: Noticia, imagen: File ) {
    const url = 'http://192.168.137.1/NotiServer/src/index.php/noticias';

    const formData: FormData = new FormData();

    formData.append('imagen', imagen, imagen.name);
    formData.append('titulo', noticia.titulo);
    formData.append('descripcion', noticia.descripcion);
    formData.append('tipo', noticia.tipo);
    formData.append('fecha', noticia.fecha);
    formData.append('idCarrera', noticia.idCarrera);
    formData.append('urlImagen', '...');
    formData.append('enlace', noticia.enlace);

    return this.http.post(url, formData);
  }
}
