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
import { FormNoticiasComponent } from './componentes/form-noticias/form-noticias.component';
import { ListaNoticiasComponent } from './componentes/lista-noticias/lista-noticias.component';
import { NoticiasPageComponent } from './componentes/noticias-page/noticias-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PanelComponent } from './componentes/panel/panel.component';
import { HeaderPanelComponent } from './componentes/header-panel/header-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormNotificacionComponent,
    ListaNotificacionesComponent,
    FormNoticiasComponent,
    ListaNoticiasComponent,
    NoticiasPageComponent,
    PanelComponent,
    HeaderPanelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
