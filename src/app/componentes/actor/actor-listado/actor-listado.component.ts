import { Component,Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent 
{
  @Output() pasarActorEvent : EventEmitter<any>;
  public listaActores : Array<any>;
  
  public constructor(private firestore : FirestoreService)
  {
    this.pasarActorEvent = new EventEmitter<any>();
    this.listaActores = new Array<any>();
    this.cargarActores();
  }


  private cargarActores() : void
  {
    const observale = this.firestore.traerActoresCollectionData();
    observale.subscribe((actoresLeidos) =>
    this.listaActores = actoresLeidos as Array<any>)
  }

  public pasarActor(actor : any, opcion : number) : void
  {
    let datosDeAccion : any=
    {
      actor : actor,
      opcion : opcion
    };
    this.pasarActorEvent.emit(datosDeAccion);
  }
}
