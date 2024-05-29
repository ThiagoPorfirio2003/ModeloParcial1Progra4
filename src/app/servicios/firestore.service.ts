import { Injectable } from '@angular/core';
import { Firestore, collectionData, getDoc, getDocs, updateDoc } from'@angular/fire/firestore';
import { collection, addDoc } from '@firebase/firestore';
import { Actor } from '../clases/actor';
import { doc,setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { Storage } from '@angular/fire/storage';
//import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService 
{
 // private nombreColeccionActores;
  private colleccionActores;
  private colleccionPeliculas;
  private pathImgPelicula : string;

  constructor(private fireStore : Firestore, private storage : Storage) 
  { 
    //this.nombreColeccionActores = "actores";
    this.colleccionActores = collection(this.fireStore, "actores");
    this.colleccionPeliculas = collection(this.fireStore, "peliculas")
    this.pathImgPelicula = "imagenes/peliculas/";
  }

  public guardarActor(actor : Actor) : void
  {

    const documentoActores = doc(this.colleccionActores);

    setDoc(documentoActores,
    {
      id : documentoActores.id,
      nombre : actor.getNombre(), 
      apellido: actor.getApellido(),
      nombreUsuario : actor.getNombreUsuario(),
      mail : actor.getMail(),
      cantidadDePeliculasParticipe : actor.getCantidadDePeliculasParticipe(),
      nombrePeliculaMasExitosa :  actor.getNombrePeliculaMasExitosa(),
      pais : actor.pais
    })
    .then(retsultado => console.log(retsultado))
    .catch(resultado => console.log(resultado));
  }

  public async guardarPelicula(datosPelicula : any) : Promise<any>
  {
    let pathCompleto : string = this.pathImgPelicula + datosPelicula.nombre + "_" + Date.now() + "." + datosPelicula.foto.name.split(".").pop(); 
    let sePudoSubirFoto : boolean = false;

    const imgRef = ref(this.storage, pathCompleto);

    await uploadBytes(imgRef, datosPelicula.foto)
    .then(()=> sePudoSubirFoto = true)
    .catch();

    if(sePudoSubirFoto)
    {
      await this.traerFotoPelicula(pathCompleto)
      .then(
        urlFoto =>
        datosPelicula.urlFoto = urlFoto);
        
      this.guardarDatosPelicula(datosPelicula);
    }
   // this.traerFotoPelicula(pathCompleto);
  }

  private async traerFotoPelicula(path : string) : Promise<string>
  {
    let retornoUrlFoto : string = "not Url";

    const imgRef = ref(this.storage, path)
    await getDownloadURL(imgRef)
    .then(respuesta => retornoUrlFoto = respuesta)

    return retornoUrlFoto;
  }

  private guardarDatosPelicula(datosPelicula : any) : void
  {
    const documentoPeliculas = doc(this.colleccionPeliculas);

    setDoc(documentoPeliculas,
    {
      id : documentoPeliculas.id,
      nombre : datosPelicula.nombre,
      tipo : datosPelicula.tipo, 
      fechaEstreno: datosPelicula.fechaEstreno,
      cantidadPublico : datosPelicula.cantidadPublico,
      actor : datosPelicula.actor,
      urlFoto : datosPelicula.urlFoto
    })
    .then(retsultado => console.log(retsultado))
    .catch(resultado => console.log(resultado));
  }

  public traerActoresCollectionData()
  {
    return collectionData(this.colleccionActores);
  }

  public traerPeliculasCollectionData()
  {
    return collectionData(this.colleccionPeliculas);
  }

  //imgRef la referencia de donde se guardan las imagenes
}

