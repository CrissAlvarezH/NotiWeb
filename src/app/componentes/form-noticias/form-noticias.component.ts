import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Noticia } from '../../utils/interfaces';

@Component({
  selector: 'app-form-noticias',
  templateUrl: './form-noticias.component.html',
  styleUrls: ['./form-noticias.component.css']
})
export class FormNoticiasComponent implements OnInit {


  public imagen: File;
  public rutaImg;

  public noticia: Noticia = {
    titulo: '',
    descripcion: '',
    tipo: '1',
    enlace: '',
    idCarrera: 0
  };

  constructor() {

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

  }

}
