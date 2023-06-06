export class Cita {
  constructor(
    public idCita: number,
    public fechaCita: string,
    public horaCita: string,
    public horaFin: string,
    public comentarios: string,
    public idUsuario: number | null,
    public idServicio: number,
    public nombreUsuario?: string,
    public nombreServicio?: string
  ) {
  }
}
