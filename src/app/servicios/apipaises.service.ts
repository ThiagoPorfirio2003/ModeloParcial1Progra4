import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIpaisesService 
{
  

  constructor(private http : HttpClient) 
  { 
  }

  public getObservablePaises() 
  {
    return this.http.get("https://restcountries.com/v3.1/all");

    /*
    const consultaDatos =  this.http.get("https://restcountries.com/v3.1/all");
    consultaDatos.subscribe((datos : any)=>
    {
      console.log(datos);
    });
    */
  }

}
