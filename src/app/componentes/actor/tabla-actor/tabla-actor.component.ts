import { Component, EventEmitter, Output } from '@angular/core';
import { APIpaisesService } from 'src/app/servicios/apipaises.service';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent 
{
  public listaActores : Array<any> = new Array<any>();
  @Output() pasarActorElegidoEvent : EventEmitter<any>;

  constructor(private fireStore : FirestoreService)
  {
    this.cargarListaActores();
    this.pasarActorElegidoEvent = new EventEmitter<any>()
  }

  private cargarListaActores() : void
  {
    const observale = this.fireStore.traerActoresCollectionData();
    observale.subscribe((actoresLeidos) =>
    this.listaActores = actoresLeidos as Array<Actor>
    )
  }

  public pasarActorElejido(actor : Actor) : void
  {
    this.pasarActorElegidoEvent.emit(actor);
  }
}
