import { User } from "./user";

export class Paciente extends User{
    obraSocial:string;
    imgs:string;

    constructor(nombre:string, apellido:string, edad:number, dni:number, mail:string, password:string,
        obraSocial:string, imgs:string){
        super(nombre, apellido, edad, dni, mail, password);
        this.obraSocial = obraSocial;
        this.imgs = imgs;
    }
}
