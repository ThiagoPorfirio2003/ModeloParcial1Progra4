import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.component.html',
  styleUrls: ['./formulario-inscripcion.component.css']
})
export class FormularioInscripcionComponent 
{
  public nombre : string;
  public apellido : string;
  public nombreUsuario : string;
  public mail : string;
  public cantidadDePeliculasParticipe : number
  public nombrePeliculaMasExitosa : string;
  public zip : number;

  @Output() pasarActorEvent : EventEmitter<any>;

  public formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder)
  {
    this.nombre = "";
    this.apellido = "";
    this.nombreUsuario = "";
    this.mail = "";
    this.cantidadDePeliculasParticipe = 0;
    this.nombrePeliculaMasExitosa = "";
    this.zip = 0;
    
    this.pasarActorEvent = new EventEmitter<any>();

    this.formGroup = formBuilder.group(
      {
        nombre : 
        [
          '',
          [
            Validators.minLength(2),
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern("[a-zA-Z ]*"),
            this.espaciosAlInicioValidador
          ]
        ],
        apellido : 
        [
          '',
          [
            Validators.minLength(2),
            Validators.required,
            Validators.maxLength(20),
            Validators.pattern("[a-zA-Z ]*"),
            this.espaciosAlInicioValidador
          ]
        ],
        nombreUsuario : 
        [
          '',
          [
            Validators.minLength(2),
            Validators.required,
            Validators.maxLength(20),
            this.hayEspacios
          ]
        ],
        mail : 
        [
          '',
          [
            Validators.required,
            Validators.email
          ]
        ],
        cantidadDePeliculasParticipe : 
        [
          0,
          [
            Validators.min(1),
            Validators.required,
            Validators.pattern("^[0-9]*$")
          ]
        ],
        nombrePeliculaMasExitosa :
        [
          '',
          [
            Validators.minLength(2),
            Validators.required,
            Validators.maxLength(20),
            this.espaciosAlInicioValidador      
          ]
        ],
        zip :
        [
          '',
          [
            Validators.min(1000),
            Validators.required,
          ]
        ]
      }
    );
  }

  private espaciosAlInicioValidador(control: AbstractControl) : null | object
  {
    const valor = <string>control.value;
    let retorno : any | null;

    if(valor[0] === " ")
    {
      retorno = {hayEspaciosIniciales : true};
    }
    else
    {
      retorno = null
    }


    return retorno;
  }

  private hayEspacios(control: AbstractControl) : null | object
  {
    const valor = <string>control.value;
    const espacios = valor.includes(' ');

    if(espacios)
    {
      return {hayEspacios : true};
    }
    else
    {
      return null
    }
  }

  public guardarActor() : void
  {
    let datosActor : any=
    {
      hayErrores : this.formGroup.valid,
      nombre : this.nombre,
      apellido : this.apellido,
      nombreUsuario : this.nombreUsuario,
      mail : this.mail,
      cantidadDePeliculasParticipe : this.cantidadDePeliculasParticipe,
      nombrePeliculaMasExitosa : this.nombrePeliculaMasExitosa,
      zip : this.zip
    }


    console.log(this.formGroup.valid); // retorna true or false
    console.log(this.formGroup.value); // retorna cada uno de los valores de los controles y su nombre
    console.log(this.formGroup.controls); // si pongo el nombre de algun control entre [] me devuelve ese control
    console.log(this.formGroup);
    // this.pasarActorEvent.emit(datosActor)
  }

}
