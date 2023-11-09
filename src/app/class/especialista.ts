import { User } from "./user";
enum Especialidad{
    ginecologia,
    pediatria,
    odontologia,
    obstreticia,
    otro
}
export class Especialista extends User{
    especialidad:Especialidad;
    img:string;

    constructor(nombre:string, apellido:string, edad:number, dni:number, mail:string, password:string,
        especialidad:Especialidad, img:string){
            super(nombre, apellido, edad, dni, mail, password);
            this.especialidad = especialidad;
            this.img = img;
        }
}
