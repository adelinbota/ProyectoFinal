import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../funciones.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit{

  constructor(private funciones:FuncionesService){
    this.diaActual = new Date();
    this.semanaActual = this.inicioSemana(this.diaActual);
    this.semanas = this.generarSemanas();
  }

  diaActual: Date;
  semanaActual: Date;
  tiposServicio:any
  tiposServicioConMayuscula:any
  
  semanas: string[];

  ngOnInit(): void {
    this.funciones.obtenerTiposServicio().subscribe( 
    tipos => {
      console.log(tipos);
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
    })
  }

  capitalize(str: string): string {
    return str.replace(/\b\w/g, c => c.toUpperCase());
  }

  anterior(){
    this.semanaActual.setDate(this.semanaActual.getDate() - 7);
    this.semanas = this.generarSemanas();
  }

  siguiente(){
    this.semanaActual.setDate(this.semanaActual.getDate() + 7);
    this.semanas = this.generarSemanas();
  }

  private inicioSemana(date: Date): Date {
    const diasemana = date.getDay();
    const diff = date.getDate() - diasemana + (diasemana === 0 ? -6 : 1);
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

    for (let i = 0; i < 6; i++) {
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
  
}
