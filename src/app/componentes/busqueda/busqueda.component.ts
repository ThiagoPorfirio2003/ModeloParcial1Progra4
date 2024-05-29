import { Component } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent 
{
  public pelicula : Pelicula;
  public mostrarPelicula : boolean;

  constructor()
  {
    this.pelicula = Pelicula.getDefaultMovie();
    this.mostrarPelicula = false;
  }

  public recibirPelicula(peliculaJSON : string) : void
  {
    this.pelicula = JSON.parse(peliculaJSON);
    this.mostrarPelicula = true;
  }
}
