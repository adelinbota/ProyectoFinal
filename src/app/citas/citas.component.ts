import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../funciones.service';
import { Router } from '@angular/router';
import { Cita } from './cita';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map } from 'rxjs';
import { CitasService } from './citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit{

  citaSeleccionada:Cita
  public citas: Observable<Cita[]> = this.citasFunciones.getCitas();
  logueado = true;

  constructor(private funciones:FuncionesService, private citasFunciones:CitasService, private modal:NgbModal){

  }
  ngOnInit(): void {
    this.funciones.getCitas().subscribe();
  }

  abrirModal(contenido: any, cita:Cita){
    this.citaSeleccionada = cita
    this.modal.open(contenido, { centered: true})
  }

  eliminarCita(cita:Cita){
    this.citasFunciones.eliminarCita(cita).subscribe();
    this.citas = this.citas.pipe(
      map((servicios: any[]) => servicios.filter((c: Cita) => c !== cita)))
    this.modal.dismissAll();
  }

  
}
