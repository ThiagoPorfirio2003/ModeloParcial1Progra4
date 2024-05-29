import { Component } from '@angular/core';
import { APIpaisesService } from './servicios/apipaises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public mostrarHeaderPeliculas : boolean;

  constructor(private api : APIpaisesService)
  {
    this.mostrarHeaderPeliculas = true;  
  }

  public activarHeaderPeliculas(mostrarHeaderPelicula : boolean)
  {
    this.mostrarHeaderPeliculas = mostrarHeaderPelicula;
  }
}
