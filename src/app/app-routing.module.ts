import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { altaActorGuard } from './guards/alta-actor.guard';

const routes: Routes = 
[
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'peliculas/alta', component: PeliculaAltaComponent, 
  canActivate: [altaActorGuard], data: {tipoUsuarioEsperado: 'admin'}},
  //{path : "actor/alta", component : ActorAltaComponent},
  { 
    path: 'actor', 
    loadChildren: () => import('./modulos/actores/actores.module').then(m => m.ActoresModule) 
  },
  {path: '', redirectTo: "bienvenido", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
