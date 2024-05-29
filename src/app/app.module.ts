import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/peliculas/pelicula-listado/pelicula-listado.component';
import { FormsModule } from '@angular/forms';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculasComponent } from './componentes/peliculas/detalle-peliculas/detalle-peliculas.component';
import { HeaderComponent } from './componentes/header/header.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HeaderPeliculasComponent } from './componentes/header-peliculas/header-peliculas.component';
import { HeaderActoresComponent } from './componentes/header-actores/header-actores.component';
import { TablaActorComponent } from './componentes/actor/tabla-actor/tabla-actor.component';
import { FormularioPeliculaComponent } from './componentes/formulario-pelicula/formulario-pelicula.component';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculasComponent,
    HeaderComponent,
    HeaderPeliculasComponent,
    HeaderActoresComponent,
    TablaActorComponent,
    FormularioPeliculaComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
