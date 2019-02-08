import { Component, OnInit } from '@angular/core';
import { ServicioPrincipalService } from '../../servicios/servicio-principal.service';
import { ResServer, Noticia } from '../../utils/interfaces';

@Component({
  selector: 'app-noticias-page',
  templateUrl: './noticias-page.component.html',
  styleUrls: ['./noticias-page.component.css']
})
export class NoticiasPageComponent implements OnInit {
  public noticias = [];
  public cargandoNoticias = false;
  public cargandoEnvio = false;

  constructor( private _principal: ServicioPrincipalService) { }

  ngOnInit() {

    this.cargandoNoticias = true;

    this._principal.getNoticias()
      .subscribe(
        (res: ResServer) => {
          if ( res.okay ) {
            this.noticias = res.noticias;
          }

          console.log('Res noticias', res);
        },
        (err) => {
          console.log('Error cargar noticias', err);
        }
      );

  }

  public enviarNoticia( noticia: Noticia ) {
    this.cargandoEnvio = true;

    const date = new Date();
    const fecha = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    const hora = date.getHours() + ':' + date.getMinutes();

    noticia.fecha = fecha + ' ' + hora;

    this._principal.enviarNoticia(noticia, noticia.imagen)
          .subscribe(
            (res: ResServer) => {

              if ( res.okay ) {

                const notiNueva: Noticia = {
                  id: res.id,
                  titulo: noticia.titulo,
                  descripcion: noticia.descripcion,
                  tipo: noticia.tipo,
                  enlace: noticia.enlace,
                  fecha: noticia.fecha,
                  idCarrera: noticia.idCarrera,
                  urlImagen: noticia.urlImagen
                };

                this.noticias.unshift(notiNueva);
              }

              console.log('Repuesta insertar noticia', res);
              this.cargandoEnvio = false;
            },
            (err) => {
              console.log('Error -> ', err);
              this.cargandoEnvio = false;
            }
          );
  }

}
