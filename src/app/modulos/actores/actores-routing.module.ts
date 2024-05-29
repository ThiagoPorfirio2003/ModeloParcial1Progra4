import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActoresComponent } from './actores.component';
import { ActorAltaComponent } from 'src/app/componentes/actor/actor-alta/actor-alta.component';
import { ActorPeliculaComponent } from 'src/app/componentes/actor-pelicula/actor-pelicula.component';

const routes: Routes = 
[
  { path: '', component: ActoresComponent, children : 
  [
    {path : "alta", component : ActorAltaComponent},
    {path : "actorPelicula", component: ActorPeliculaComponent},
    {path: '', redirectTo: "alta", pathMatch: "full"}
  ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
