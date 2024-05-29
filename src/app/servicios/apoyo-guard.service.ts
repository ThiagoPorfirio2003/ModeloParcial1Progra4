import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApoyoGuardService {

  public sePuedeAcceder : boolean;
  public rol : string;

  constructor() 
  {
    this.rol = "admin" 
    this.sePuedeAcceder = false;
  }
}
