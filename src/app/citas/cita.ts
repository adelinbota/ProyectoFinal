export class Cita{
    constructor(
        public idCita: number,
        public fechaReserva:string,
        public fechaCita:string,
        public idUsuario:number,
        public idServicio:number
    ){}
}