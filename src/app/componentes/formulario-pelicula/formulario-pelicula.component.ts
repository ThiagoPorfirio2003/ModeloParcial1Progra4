import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent 
{
  public nombre : string;
  public tipo : string;
  public fechaEstreno : Date;
  public cantidadPublico : number;
  public archivo : any;

  @Output() pasarDatosPeliculaEvent : EventEmitter<any>;

  constructor()
  {
    this.nombre = "";
    this.tipo = "";
    this.fechaEstreno = new Date();
    this.cantidadPublico = 0;
    
    this.pasarDatosPeliculaEvent = new EventEmitter<any>();
  }

  public recibirArchivo(archivo : any) : void
  {
    this.archivo = archivo;
  }

  public guardarPelicula() : void
  {
    let datosPelicula : any=
    {
      nombre : this.nombre,
      tipo : this.tipo,
      fechaEstreno : this.fechaEstreno,
      cantidadPublico : this.cantidadPublico,
      foto : this.archivo.target.files[0]
    }
   // console.log(datosPelicula.foto)

    this.pasarDatosPeliculaEvent.emit(datosPelicula)
  }
}
