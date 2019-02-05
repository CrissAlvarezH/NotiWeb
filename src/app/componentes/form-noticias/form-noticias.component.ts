import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Noticia } from '../../utils/interfaces';
import { ServicioPrincipalService } from '../../servicios/servicio-principal.service';

@Component({
  selector: 'app-form-noticias',
  templateUrl: './form-noticias.component.html',
  styleUrls: ['./form-noticias.component.css']
})
export class FormNoticiasComponent implements OnInit {


  public imagen: File;
  public rutaImg;
  public cargando = false;

  public noticia: Noticia = {
    titulo: '',
    descripcion: '',
    tipo: '1',
    enlace: '',
    idCarrera: '0'
  };

  constructor( private _principal: ServicioPrincipalService ) {

  }

  ngOnInit() {
  }

  public onFileCambia( evento ) {
    console.log( evento );

    const readerFile = new FileReader();

    if ( evento.target.files[0] ) {
      this.imagen = evento.target.files[0];

      // Leemos el archivo para luego usar una URL del mismo y pasarsela al <img>
      readerFile.readAsDataURL(this.imagen);

      readerFile.onload = (event) => {
        console.log(event);

        this.rutaImg = readerFile.result;
      };
    }
  }

  public enviar() {
    this.cargando = true;
    console.log(this.noticia, this.imagen);

    this._principal.enviarNoticia(this.noticia, this.imagen)
          .subscribe(
            (res) => {
              console.log('Repuesta insertar noticia', res);
              this.cargando = false;
            },
            (err) => {
              console.log('Error -> ', err);
              this.cargando = false;
            }
          );
  }

}
