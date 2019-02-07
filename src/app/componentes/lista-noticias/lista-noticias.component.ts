import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../../utils/interfaces';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  @Input() public noticias: Noticia;

  constructor() { }

  ngOnInit() {
  }

}
