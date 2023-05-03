export class Usuario{
    constructor(
        public idUsuario:number,
        public username:string,
        public password:string,
        public nombre:string,
        public apellidos:string,
        public telefono:number,
        public email:string,
        public cp:string,
        public fechaNac:string,
        public idTipo:number
        ){

    }

}