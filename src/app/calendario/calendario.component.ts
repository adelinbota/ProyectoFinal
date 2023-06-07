import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../funciones.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cita } from '../citas/cita';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor(private funciones: FuncionesService, private modal: NgbModal, private router: Router) {
    this.diaActual = new Date();
    this.semanaActual = this.inicioSemana(this.diaActual);
    this.semanas = this.generarSemanas();
  }

  public citasPelo: Cita[] = [];
  public citasUnas: Cita[] = [];
  public usuarios: any[];
  public servicios: any[];
  tipoSeleccionado: number = 1;
  citaSeleccionada: Cita;
  idUsuario: number | null;
  fechaSeleccionada: string;
  horaSeleccionada: string;
  horaFin: string;
  duracionServicio: string
  comentarios: string;
  valorServicio: number;
  diaActual: Date;
  semanaActual: Date;
  tiposServicio: any
  tiposServicioConMayuscula: any
  horas: string[] = ['09:00:00', '09:30:00', '10:00:00', '10:30:00', '11:00:00', '11:30:00', '12:00:00', '12:30:00', '13:00:00', '13:30:00', '14:00:00', '14:30:00', '15:00:00', '15:30:00', '16:00:00', '16:30:00', '17:00:00', '17:30:00', '18:00:00', '18:30:00', '19:00:00', '19:30:00', '20:00:00'];

  semanas: string[];

  ngOnInit(): void {
    this.funciones.getCitasPelo().subscribe({
      next: (citas: Cita[]) => {
        this.citasPelo = citas;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
    this.funciones.getCitasUnas().subscribe({
      next: (citas: Cita[]) => {
        this.citasUnas = citas;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
    this.funciones.obtenerTiposServicio().subscribe(
      tipos => {
        this.tiposServicio = tipos;
        this.tiposServicioConMayuscula = tipos.map(tipo => {
          return {
            idTipoServicio: tipo.idTipoServicio,
            nombre: this.capitalize(tipo.nombre)
          };
        });
      },
      error => {
        console.error(error);
      });
    this.funciones.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios.map(usuario => {
          return {
            idUsuario: usuario.idUsuario,
            nombre: usuario.nombre
          };
        });
      },
      error => {
        console.error(error);
      })
    this.funciones.getServicios().subscribe(
      servicios => {
        this.servicios = servicios.map(servicio => {
          return {
            idServicio: servicio.idServicio,
            nombre: servicio.nombre,
            duracion: servicio.duracion,
            idTipoServicio: servicio.idTipoServicio
          };
        });
      },
      error => {
        console.error(error);
      });
  }

  capitalize(str: string): string {
    return str.replace(/\b\w/g, c => c.toUpperCase());
  }

  anterior() {
    this.semanaActual.setDate(this.semanaActual.getDate() - 7);
    this.semanas = this.generarSemanas();
  }

  siguiente() {
    this.semanaActual.setDate(this.semanaActual.getDate() + 7);
    this.semanas = this.generarSemanas();
  }

  private inicioSemana(date: Date): Date {
    const diasemana = date.getDay();
    const diff = date.getDate() - diasemana + (diasemana === 0 ? -6 : diasemana);
    const comienzosemana = new Date(date.setDate(diff));

    if (comienzosemana.getMonth() !== date.getMonth()) {
      comienzosemana.setMonth(date.getMonth());
      comienzosemana.setDate(1);
    }

    return comienzosemana;
  }

  private generarSemanas(): string[] {
    const semanas: string[] = [];
    const fecha = new Date(this.semanaActual);

    for (let i = 0; i < 7; i++) {
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const formato = `${dia}/${mes}`;
      semanas.push(formato);
      fecha.setDate(fecha.getDate() + 1);
    }

    return semanas;
  }

  fechaAnterior(semana: string): boolean {
    const [dia, mes] = semana.split('/');
    const date = new Date();
    const fechaHoy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const fechaAnterior = new Date(date.getFullYear(), parseInt(mes) - 1, parseInt(dia));

    return fechaAnterior < fechaHoy;
  }

  getDuracionServicio() {
    if (this.valorServicio) {
      this.horaFin = this.calcularFechaFinal()
      console.log(this.servicios)
      const servicioSeleccionado = this.servicios.find(servicio => servicio.idServicio == this.valorServicio)
      console.log(this.valorServicio)
      this.duracionServicio = servicioSeleccionado.duracion
    }
  }

  calcularFechaFinal(): string {
    if (this.valorServicio) {
      const servicioSeleccionado = this.servicios.find(servicio => servicio.idServicio == this.valorServicio);
      if (servicioSeleccionado) {
        const duracion = servicioSeleccionado.duracion;
        const fechaInicio = new Date(this.formatear(this.fechaSeleccionada));
        fechaInicio.setHours(parseInt(this.horaSeleccionada.slice(0, 2)));
        fechaInicio.setMinutes(parseInt(this.horaSeleccionada.slice(3, 5)));

        const duracionHoras = parseInt(duracion.slice(0, 2));
        const duracionMinutos = parseInt(duracion.slice(3, 5));

        const fechaFinal = new Date(fechaInicio.getTime() + duracionHoras * 60 * 60 * 1000 + duracionMinutos * 60 * 1000);
        const hora = fechaFinal.getHours().toString().padStart(2, '0');
        const minutos = fechaFinal.getMinutes().toString().padStart(2, '0');

        return `${hora}:${minutos}`;
      }
    }

    return '';
  }

  mostrarTipo(tipo: number) {
    console.log(tipo)
  }

  citaProgramada(semana: string, hora: string): boolean {
    if (this.tipoSeleccionado == 1) {
      const cita = this.citasPelo.find(
        (cita) =>
          cita.fechaCita === this.formatear(semana) &&
          hora >= cita.horaCita && hora < cita.horaFin
      );
      return !!cita;
    } else {
      const cita = this.citasUnas.find(
        (cita) =>
          cita.fechaCita === this.formatear(semana) &&
          hora >= cita.horaCita && hora < cita.horaFin
      );
      return !!cita;
    }
  }

  obtenerNombreUsuario(semana: string, hora: string): string {
    if (this.tipoSeleccionado == 1) {
      const cita = this.citasPelo.find(
        (cita) =>
          cita.fechaCita === this.formatear(semana) &&
          hora >= cita.horaCita && hora < cita.horaFin
      );

      if (cita && this.usuarios) {
        if (cita.nombreUsuario !== null) {
          const usuario = this.usuarios.find(
            (usuario) => usuario.idUsuario === cita.idUsuario
          );
          if (usuario) {
            return usuario.nombre;
          }
        }
        return cita.comentarios || '';
      }
    } else {
      const cita = this.citasUnas.find(
        (cita) =>
          cita.fechaCita === this.formatear(semana) &&
          hora >= cita.horaCita && hora < cita.horaFin
      );

      if (cita && this.usuarios) {
        if (cita.nombreUsuario !== null) {
          const usuario = this.usuarios.find(
            (usuario) => usuario.idUsuario === cita.idUsuario
          );
          if (usuario) {
            return usuario.nombre;
          }
        }
        return cita.comentarios || '';
      }
    }


    return '';
  }

  // PROGRAMACIÓN MODAL
  fechaHoy = new Date();
  anio = this.fechaHoy.getFullYear().toString()
  contenido1: any
  contenido2: any

  abrirModal(contenido1: any, contenido2: any, fecha: string, hora: string) {
    console.log(contenido1, contenido2, fecha, hora)
    this.citaSeleccionada = this.obtenerCita(fecha, hora)
    if (this.tipoSeleccionado == 1) {
      const cita = this.citasPelo.find(
        (cita) =>
          cita.fechaCita === this.formatear(fecha) &&
          hora >= cita.horaCita && hora < cita.horaFin
      );
      if (cita) {
        this.fechaSeleccionada = fecha;
        this.horaSeleccionada = hora;
        this.modal.open(contenido2, { centered: true })
      } else {
        this.fechaSeleccionada = fecha;
        this.horaSeleccionada = hora;
        this.modal.open(contenido1, { centered: true })
      }
    } else {
      const cita = this.citasUnas.find(
        (cita) =>
          cita.fechaCita === this.formatear(fecha) &&
          hora >= cita.horaCita && hora < cita.horaFin
      );
      if (cita) {
        this.fechaSeleccionada = fecha;
        this.horaSeleccionada = hora;
        this.modal.open(contenido2, { centered: true })
      } else {
        this.fechaSeleccionada = fecha;
        this.horaSeleccionada = hora;
        this.modal.open(contenido1, { centered: true })
      }
    }
  }

  cita = new Cita(1, "", "", "", "", 1, 1)

  addDatos() {
    const fechaMysql = this.formatear(this.fechaSeleccionada);
    this.cita.fechaCita = fechaMysql
    this.cita.horaCita = this.horaSeleccionada
    this.cita.horaFin = this.horaFin
    this.cita.comentarios = this.comentarios
    this.cita.idUsuario = this.idUsuario
    this.cita.idServicio = this.valorServicio
    this.funciones.agregarCita(this.cita).subscribe();
    this.modal.dismissAll();
  }

  actualizar() {
    this.funciones.actualizarCita(this.citaSeleccionada).subscribe();
    this.modal.dismissAll();
    this.router.navigate(['/calendario']);
  }

  eliminar(cita: Cita) {
    this.funciones.eliminarCita(cita).subscribe();
    this.modal.dismissAll();
    window.location.reload();
  }

  obtenerCita(fecha: string, hora: string): Cita {
    if (this.tipoSeleccionado == 1) {
      const cita = this.citasPelo.find(
        (cita) =>
          cita.fechaCita === this.formatear(fecha) &&
          hora >= cita.horaCita &&
          hora < cita.horaFin
      );

      return cita || new Cita(0, "", "", "", "", 0, 0);
    } else {
      const cita = this.citasUnas.find(
        (cita) =>
          cita.fechaCita === this.formatear(fecha) &&
          hora >= cita.horaCita &&
          hora < cita.horaFin
      );

      return cita || new Cita(0, "", "", "", "", 0, 0);
    }
  }

  formatear(fechaSeleccionada: string): string {
    const [dia, mes] = fechaSeleccionada.split('/');
    const anio = this.fechaHoy.getFullYear();

    return `${anio}-${mes}-${dia}`;
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    let month = (today.getMonth() + 1).toString();
    let day = today.getDate().toString();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  }

}
