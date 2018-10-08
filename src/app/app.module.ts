import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { FormNotificacionComponent } from './componentes/form-notificacion/form-notificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormNotificacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
