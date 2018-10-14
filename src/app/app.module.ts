import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormNotificacionComponent } from './componentes/form-notificacion/form-notificacion.component';
import { MaterialModule } from './material.module';
import { ListaNotificacionesComponent } from './componentes/lista-notificaciones/lista-notificaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormNotificacionComponent,
    ListaNotificacionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
