export class User {
    nombre:string;
    apellido:string;
    edad:number;
    dni:number;
    mail:string;
    password:string;

    constructor(nombre:string, apellido:string, edad:number, dni:number, mail:string, password:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.mail = mail;
        this.password = password;
    }
}
