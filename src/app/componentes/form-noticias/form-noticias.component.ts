import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Noticia } from '../../utils/interfaces';

@Component({
  selector: 'app-form-noticias',
  templateUrl: './form-noticias.component.html',
  styleUrls: ['./form-noticias.component.css']
})
export class FormNoticiasComponent implements OnInit {


  public imagen: File;
  public rutaImg;

  @Input() public cargando;
  @Output() public enviarNoticia: EventEmitter<any>;

  public noticia: Noticia = {
    titulo: '',
    descripcion: '',
    tipo: '1',
    enlace: '',
    idCarrera: '0'
  };

  constructor() {
    this.enviarNoticia = new EventEmitter();
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
    this.noticia.imagen = this.imagen;

    this.enviarNoticia.emit(this.noticia);
  }

}
