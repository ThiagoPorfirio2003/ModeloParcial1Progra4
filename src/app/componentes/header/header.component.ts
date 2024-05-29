import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent 
{
  @Output() mostrarMenuPeliculaEvent : EventEmitter<boolean>;

  public constructor()
  {
    this.mostrarMenuPeliculaEvent = new EventEmitter<boolean>();
  }

  public mostrarMenuPelicula(mostrarMenuPelicula : boolean)
  {
    this.mostrarMenuPeliculaEvent.emit(mostrarMenuPelicula);
  }
}
