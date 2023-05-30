export class Contacto{
    constructor(
        public idContacto: number,
        public nombre:string,
        public correo:string,
        public mensaje:string,
        public valoracion:number,
        public resena:string,
        public activo:number,
    ){}
}