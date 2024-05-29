import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalles-actor',
  templateUrl: './detalles-actor.component.html',
  styleUrls: ['./detalles-actor.component.css']
})
export class DetallesActorComponent 
{
  @Input() actor : any


}
