import { Actor } from "./actor";

export class Pelicula
{
    public nombre : string;
    public tipo : string;
    public fechaEstreno : Date;
    public cantidadPublico : number;
    public urlFoto : string;
    public actor : Actor;
    public static readonly KEY_PELICULAS : string = "movies"; 

    public constructor( nombre : string, tipo : string, fechaEstreno : Date,
        cantidadPublico : number, foto : string, actorEstrella : Actor)
    {
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.urlFoto = foto;
        this.actor = actorEstrella;
    }

    public static getDefaultMovie() : Pelicula
    {
        return new Pelicula('','',new Date(),0,'', Actor.getDefaultActor());
    }

    /*
    public getId() : number
    {
        return this.id;
    }
    */
    public getNombre() : string
    {
        return this.nombre;
    }

    public getTipo() : string
    {
        return this.tipo;
    }

    public getFechaEstreno() : Date
    {
        return this.fechaEstreno;
    }

    public getCantidadPublico() : number
    {
        return this.cantidadPublico;
    }

    /*
    public getFoto() : string
    {
        return this.foto;
    }
    */

    public static getPeliculasJSON() : string | null
    {
        let peliculas : Array<Pelicula> = new Array<Pelicula>();

        peliculas.push(new Pelicula("Star Wars", "Accion", new Date("1999-05-01"), 500, "GUERRA", Actor.getDefaultActor()));
        peliculas.push(new Pelicula("Evil dead", "terror", new Date("2023-07-22"), 500, "MIEDO", Actor.getDefaultActor()));
        peliculas.push(new Pelicula("End Game", "Accion", new Date("2019-04-21"), 500, "Vengadores", Actor.getDefaultActor()));
        peliculas.push(new Pelicula("Holmes", "Misterio", new Date("1995-04-21"), 500, "INVESTIGACION", Actor.getDefaultActor()));

        return JSON.stringify(peliculas);
        //return localStorage.getItem(Pelicula.KEY_PELICULAS);
    }

    

    /*
    public static agregar(nombre : string, clave : string, mail : string) : boolean
    {
        let usuarios_json : string | null;
        let usuarios : any[];
        let nuevoUsuario : any;
        let retorno : boolean = false;

        nuevoUsuario = 
        {
            nombre : nombre,
            clave : clave,
            mail : mail,
            fechaDeCreacion : new Date()
        }
        /*
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.clave = clave;
        nuevoUsuario.mail = mail;
        nuevoUsuario.fechaDeCreacion = (new Date).getDate()/
        usuarios_json = Usuario.getUsuariosJSON();

        if(usuarios_json != null)
        {
            usuarios = JSON.parse(usuarios_json);
        }
        else
        {
            usuarios = new Array<any>();
        }

        if(usuarios.push(nuevoUsuario) > 0)
        {
            localStorage.setItem(Usuario.KEY_USUARIOS, JSON.stringify(usuarios));    
            retorno = true;
        }

        return retorno;
    }

    public static iniciarSesion(mail : string, clave : string) : string
    {
        let usuarios_json : string | null;
        let usuarios : any[];

        let retorno : any =
        {
            exito : false,
            usuario : null
        }

        usuarios_json = Usuario.getUsuariosJSON();

        if(usuarios_json != null)
        {
            usuarios = JSON.parse(usuarios_json);

            for(let i :number=0; i< usuarios.length;i++)
            {
                if(usuarios[i].mail === mail && usuarios[i].clave === clave)
                {
                    retorno.exito = true;
                    retorno.usuario = new Usuario(usuarios[i].nombre, usuarios[i].mail, usuarios[i].fechaDeCreacion);
                    break;
                }
            }
        }

        return JSON.stringify(retorno);
    }

    public static verificarExistencia(mail : string, nombre : string) : boolean
    {
        let usuarios_json : string | null;
        let usuarios : any[];
        let retorno : boolean;

        retorno= false;

        usuarios_json = Usuario.getUsuariosJSON();

        if(usuarios_json != null)
        {
            usuarios = JSON.parse(usuarios_json);
            for(let i :number=0; i< usuarios.length;i++)
            {
                if(usuarios[i].nombre == nombre || usuarios[i].mail == mail)
                {
                    retorno = true;
                    break;
                }
            }
        }
        return retorno;
    }*/
}