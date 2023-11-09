import { User } from "./user";

export class Admin extends User{
    img:string;

    constructor(nombre:string, apellido:string, edad:number, dni:number, mail:string, password:string, img:string){
        super(nombre, apellido, edad, dni, mail, password);
        this.img = img;
    }
}
