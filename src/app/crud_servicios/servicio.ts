import { Time } from "@angular/common";

export class Servicio{
    constructor(
        public idServicio: number,
        public nombre:string,
        public descripcion:string,
        public precio:number,
        public duracion:string,
        public idTipoServicio:number
    ){}
}