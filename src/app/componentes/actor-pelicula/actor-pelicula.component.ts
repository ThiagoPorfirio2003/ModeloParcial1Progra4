import { Component } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent 
{
  private peliculasAlmacenadas : Array<any>;

  public actorAMostrar : any;
  public paisAMostrar : any;
  public peliculasAMostrar : Array<any>;

  public mostrarPais : boolean;
  public mostrarDatosActor : boolean;
  public mostrarPeliculas : boolean;

  constructor(private firestore : FirestoreService)
  {
    this.peliculasAlmacenadas = new Array<any>();

    this.peliculasAMostrar = new Array<any>();
    
    this.mostrarPais = false;
    this.mostrarDatosActor = false;
    this.mostrarPeliculas = false;

    this.cargarPeliculas();
  }

  private cargarPeliculas() : void
  {
    const observale = this.firestore.traerPeliculasCollectionData();
    observale.subscribe((peliculasLeidas) =>
    this.peliculasAlmacenadas = peliculasLeidas as Array<any>)
  }

  private filtrarPeliculasPorActor(idActor : string) : Array<any>
  {
    let retornoPeliculas : Array<any> = []


    this.peliculasAlmacenadas.forEach((pelicula)=>
    {
      if(pelicula.actor.id === idActor)
      {
        retornoPeliculas.push(pelicula);
      }
    })



    return retornoPeliculas;
  }

  public recibirActorYOpcion(actorYOpcion : any) : void
  {
    let actorAMostrar = actorYOpcion.actor;
    let opcion = actorYOpcion.opcion;

    switch(opcion)
    {
      case 1:
        this.mostrarPeliculas = true;
        this.peliculasAMostrar = this.filtrarPeliculasPorActor(actorAMostrar.id);
        break;

      case 2:
        this.mostrarPais = true;
        this.paisAMostrar = actorAMostrar.pais;
        break;

      case 3:
        this.mostrarDatosActor = true;
        this.actorAMostrar = actorAMostrar;
        break;
    }
  }
}
