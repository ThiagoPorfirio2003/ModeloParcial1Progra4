import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-peliculas',
  templateUrl: './detalle-peliculas.component.html',
  styleUrls: ['./detalle-peliculas.component.css']
})
export class DetallePeliculasComponent 
{
  @Input() pelicula : Pelicula;

  constructor()
  {
    this.pelicula = Pelicula.getDefaultMovie();
  }

  
}
