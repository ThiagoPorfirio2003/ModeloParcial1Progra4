import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pais-actor',
  templateUrl: './pais-actor.component.html',
  styleUrls: ['./pais-actor.component.css']
})
export class PaisActorComponent 
{
  @Input() paisActor : any;

  constructor()
  {

  }
}
