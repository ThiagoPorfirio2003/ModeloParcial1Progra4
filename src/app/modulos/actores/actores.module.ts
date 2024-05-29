import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActoresRoutingModule } from './actores-routing.module';
import { ActoresComponent } from './actores.component';
import { TablaPaisesComponent } from '../../componentes/tabla-paises/tabla-paises.component';
import { ActorAltaComponent } from 'src/app/componentes/actor/actor-alta/actor-alta.component';
import { FormularioInscripcionComponent } from 'src/app/componentes/formulario-inscripcion/formulario-inscripcion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorListadoComponent } from 'src/app/componentes/actor/actor-listado/actor-listado.component';
import { ActorPeliculaComponent } from 'src/app/componentes/actor-pelicula/actor-pelicula.component';
import { PaisActorComponent } from 'src/app/componentes/pais-actor/pais-actor.component';
import { DetallesActorComponent } from 'src/app/componentes/detalles-actor/detalles-actor.component';
import { PeliculasDeActorComponent } from 'src/app/componentes/peliculas-de-actor/peliculas-de-actor.component';

@NgModule({
  declarations: [
    ActoresComponent,
    ActorAltaComponent,
    FormularioInscripcionComponent,
    TablaPaisesComponent,
    ActorListadoComponent,
    ActorPeliculaComponent,
    PaisActorComponent,
    DetallesActorComponent,
    PeliculasDeActorComponent
  ],
  imports: [
    CommonModule,
    ActoresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ActoresModule { }
