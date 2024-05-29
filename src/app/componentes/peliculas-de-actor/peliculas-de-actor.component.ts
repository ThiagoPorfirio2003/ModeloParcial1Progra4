import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-peliculas-de-actor',
  templateUrl: './peliculas-de-actor.component.html',
  styleUrls: ['./peliculas-de-actor.component.css']
})
export class PeliculasDeActorComponent 
{
  @Input() peliculasAMostrar : Array<any>;

  constructor()
  {
    this.peliculasAMostrar = new Array<any>();
  }
}
