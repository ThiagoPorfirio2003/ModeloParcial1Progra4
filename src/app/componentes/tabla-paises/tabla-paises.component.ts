import { Component, EventEmitter, Output } from '@angular/core';
import { APIpaisesService } from 'src/app/servicios/apipaises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent 
{
  public paises : Array<any> = new Array<any>();
  @Output() pasarPaisElegidoEvent : EventEmitter<any>;

  constructor(private servicioAPI : APIpaisesService)
  {
    this.cargarListaPaises();
    this.pasarPaisElegidoEvent = new EventEmitter<any>()
  }

  private cargarListaPaises() : void
  {
    const observale = this.servicioAPI.getObservablePaises()
    observale.subscribe((paises) =>
    this.paises = paises as Array<any>)
  }

  public pasarPaisElejidoPais(pais : any) : void
  {
    this.pasarPaisElegidoEvent.emit(pais);
  }
}
