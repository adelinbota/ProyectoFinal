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

  public citas: Cita[] = [];

  diaActual: Date;
  semanaActual: Date;
  tiposServicio: any
  tiposServicioConMayuscula: any
  horas: string[] = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  semanas: string[];

  ngOnInit(): void {
    this.funciones.getCitas().subscribe(
      citas => {
        this.citas = citas;
        console.log(citas);
      },
      error => {
        console.error(error);
      }
    );
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
            nombre: servicio.nombre
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

  estaOcupada(fecha: string, hora: string): boolean {
    const hola = this.citas.some(cita => cita.fechaCita === fecha && cita.horaCita === hora);
    return hola;
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

  // PROGRAMACIÓN MODAL
  fechaHoy = new Date();
  anio = this.fechaHoy.getFullYear().toString()
  contenido: any

  abrirModal(contenido: any, fecha: string, hora: string) {
    this.fechaSeleccionada = fecha;
    this.horaSeleccionada = hora;
    this.modal.open(contenido, { centered: true })
  }

  public usuarios: any[];
  public servicios: any[];
  idUsuario: number | null;
  fechaSeleccionada: string;
  horaSeleccionada: string;
  comentarios: string;
  idServicio: number;

  cita = new Cita(1, "", "", "", 1, 1)

  addDatos() {
    const fechaMysql = this.formatear(this.fechaSeleccionada);
    this.cita.fechaCita = fechaMysql
    this.cita.horaCita = this.horaSeleccionada
    this.cita.comentarios = this.comentarios
    this.cita.idUsuario = this.idUsuario
    this.cita.idServicio = this.idServicio
    console.log(this.cita);
    this.funciones.agregarCita(this.cita).subscribe();
    this.router.navigate(['/citas']);
    this.modal.dismissAll();
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
