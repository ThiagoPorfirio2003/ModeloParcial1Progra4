export class Actor
{
    private nombre : string;
    private apellido : string;
    private nombreUsuario : string;
    private mail : string;
    public pais : any;
    private cantidadDePeliculasParticipe : number;
    private nombrePeliculaMasExitosa : string;
    private zip : string;
  //  private direccion : string;

   // private fechaDeCreacion : Date;
    //private ultimaConexion : Date;
    public static readonly KEY_ACTORES : string = "users"; 

    public constructor(nombre : string, apellido : string, nombreUsuario : string, mail : string,
        pais : any, zip : string, cantidadDePeliculasParticipe : number, nombrePeliculaMasExitosa : string)//, ultimaConexion : Date)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nombreUsuario = nombreUsuario;
        this.mail = mail;
        this.pais = pais;
        this.zip = zip;
        this.cantidadDePeliculasParticipe = cantidadDePeliculasParticipe;
        this.nombrePeliculaMasExitosa = nombrePeliculaMasExitosa;
    }

    public static getDefaultActor() : Actor
    {
        return new Actor("test","test", "test","test","test","test", 0, "test");
    }
    
    
    public getNombre() : string
    {
        return this.nombre;
    }
    
    public getApellido() : string
    {
        return this.apellido;
    }

    public getNombreUsuario() : string
    {
        return this.nombreUsuario;
    }

    public getMail() : string
    {
        return this.mail;
    }

    public getCantidadDePeliculasParticipe() : number
    {
        return this.cantidadDePeliculasParticipe;
    }

    public getNombrePeliculaMasExitosa() : string
    {
        return this.nombrePeliculaMasExitosa;
    }

    public getZip() : string
    {
        return this.zip;
    }
}