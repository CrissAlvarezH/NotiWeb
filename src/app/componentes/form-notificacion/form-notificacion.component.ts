import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Notificacion } from '../../utils/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-notificacion',
  templateUrl: './form-notificacion.component.html',
  styleUrls: ['./form-notificacion.component.css']
})
export class FormNotificacionComponent implements OnInit {
  @Input() public cargando;
  @Output() public enviarNoti: EventEmitter<Notificacion>;
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'notificacion' : new FormGroup({
        'titulo': new FormControl('', [ Validators.required ]),
        'descripcion': new FormControl('', [ Validators.required ]),
        'tipo': new FormControl('', [ Validators.required ]),
        'destinatario': new FormControl('', [ Validators.required ])
      })
    });

    this.enviarNoti = new EventEmitter();
  }

  ngOnInit() {
  }

  enviar() {
    this.enviarNoti.emit( this.form.value.notificacion );
  }

}
