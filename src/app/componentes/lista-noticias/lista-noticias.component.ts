import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../../utils/interfaces';
import { URL_IMG_NOTICIAS } from 'src/app/utils/constantes';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  @Input() public noticias: Noticia;
  public urlNoticias = URL_IMG_NOTICIAS;

  constructor() { }

  ngOnInit() {
  }

}
