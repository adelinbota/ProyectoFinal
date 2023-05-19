export interface Cita{

        idCita: number,
        fechaCita:string,
        comentarios:string,
        idUsuario:number,
        idServicio:number,
        nombreUsuario?: string,
        nombreServicio?: string
}