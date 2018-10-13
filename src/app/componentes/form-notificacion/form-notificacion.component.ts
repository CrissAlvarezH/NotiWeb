import { ServicioPrincipalService } from './../../servicios/servicio-principal.service';
import { Component, OnInit } from '@angular/core';
import { Notificacion } from '../../utils/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-notificacion',
  templateUrl: './form-notificacion.component.html',
  styleUrls: ['./form-notificacion.component.css']
})
export class FormNotificacionComponent implements OnInit {
  public form: FormGroup;
  public cargando = false;

  constructor( private _principal: ServicioPrincipalService) {
    this.form = new FormGroup({
      'notificacion' : new FormGroup({
        'titulo': new FormControl('', [ Validators.required ]),
        'descripcion': new FormControl('', [ Validators.required ]),
        'tipo': new FormControl('', [ Validators.required ]),
        'destinatario': new FormControl('', [ Validators.required ])
      })
    });
  }

  ngOnInit() {
  }

  enviar() {
    this.cargando = true;

    this._principal.enviarNotificacion(this.form.value.notificacion)
      .subscribe( (resp: any) => {

        if ( resp.okay ) {
          console.log(`Respuesta de servicio web al enviar notificacion ${ JSON.stringify(resp) }`);
        } else {
          console.log(`Error`);
        }

        this.cargando = false;
      }, err => {
        console.log(`Error al enviar notificación ${ JSON.stringify(err) }`);

        this.cargando = false;
      });
  }

}
