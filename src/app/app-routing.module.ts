import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { NoticiasPageComponent } from './componentes/noticias-page/noticias-page.component';

const RUTAS: Routes = [
  {
    path: 'panel',
    component: PanelComponent,
    children: [
      { path: 'notificaciones', component: HomeComponent},
      { path: 'noticias', component: NoticiasPageComponent},
    ]
  },
  { path: '**', redirectTo: 'panel', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(RUTAS, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
