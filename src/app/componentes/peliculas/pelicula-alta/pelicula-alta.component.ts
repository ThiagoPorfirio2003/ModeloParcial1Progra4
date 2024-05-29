import { Component } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent 
{
  private actor : Actor;
  private hayActor : boolean;

  constructor(private fireStore : FirestoreService)
  {
    this.hayActor = false;
    this.actor = Actor.getDefaultActor();
  }

  public guardarPelicula(datosPelicula : any) : void
  {
    //console.log(datosPelicula.foto);

    if(this.hayActor)
    {
      datosPelicula.actor = this.actor;
      this.fireStore.guardarPelicula(datosPelicula);
      /*
      this.fireStore.guardarActor(new Actor(datosActor.nombre, datosActor.apellido, datosActor.nombreUsuario,
      datosActor.mail, this.paisActor, datosActor.zip, datosActor.cantidadDePeliculasParticipe, datosActor.nombrePeliculaMasExitosa))  
      this.nombre + "." + datosPelicula.foto.name.split(".").pop() 
      */
    }
  }

  public obtenerActor(actor : Actor) : void
  {
    this.actor = actor;
    this.hayActor = true;
  }
}

