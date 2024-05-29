import { Component } from '@angular/core';
//import { addDoc, collection, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import { Actor } from '../../../clases/actor';
import { FirestoreService } from 'src/app/servicios/firestore.service';


@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})

export class ActorAltaComponent 
{
  private paisActor : any;
  private hayPais : boolean;

  constructor(private fireStore : FirestoreService)
  {
    this.hayPais = false;
  }

  public guardarActor(datosActor : any) : void
  {
    if(this.hayPais)
    {      
      this.fireStore.guardarActor(new Actor(datosActor.nombre, datosActor.apellido, datosActor.nombreUsuario,
      datosActor.mail, this.paisActor, datosActor.zip, datosActor.cantidadDePeliculasParticipe, datosActor.nombrePeliculaMasExitosa))   
    }
  }

  public obtenerPaisActor(paisActor : any) : void
  {
    this.paisActor = paisActor;
    this.hayPais = true;
  }
}
