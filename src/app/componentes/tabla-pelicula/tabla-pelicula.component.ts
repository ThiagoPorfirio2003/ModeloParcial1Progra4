import { Component, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})

export class TablaPeliculaComponent 
{
  @Output() pasarPeliculaEvent : EventEmitter<string>;
  public listaPeliculas : Array<Pelicula>;
  
  public constructor(private firestore : FirestoreService)
  {
    this.pasarPeliculaEvent = new EventEmitter<string>();
    this.listaPeliculas = new Array<Pelicula>();
    this.cargarPeliculas();
  }


  private cargarPeliculas() : void
  {
    const observale = this.firestore.traerPeliculasCollectionData();
    observale.subscribe((peliculasLeidas) =>
    this.listaPeliculas = peliculasLeidas as Array<Pelicula>)
    /*
    let peliculasJSON : any = Pelicula.getPeliculasJSON();

    if(peliculasJSON != null)
    {
      this.peliculas = JSON.parse(peliculasJSON);
    }
    */
  }

  public pasarPelicula(pelicula : any) : void
  {
    this.pasarPeliculaEvent.emit(JSON.stringify(pelicula));
  }
}
