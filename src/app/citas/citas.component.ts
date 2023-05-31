import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../funciones.service';
import { Cita } from './cita';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, combineLatest, map } from 'rxjs';
import { CitasService } from './citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent{

  citaSeleccionada:Cita
  contenido:any
  public citas: Observable<Cita[]>;
  logueado = false;
 
  constructor(private funciones:FuncionesService, private citasFunciones:CitasService, private modal:NgbModal){
    this.citas = combineLatest([
      this.citasFunciones.getCitas(),
      this.funciones.getUsuarios(),
      this.funciones.getServicios()
    ]).pipe(
      map(([citas, usuarios, servicios]) => {
        return citas.map(cita => {
          const usuario = usuarios.find(u => u.idUsuario === cita.idUsuario);
          const servicio = servicios.find(s => s.idServicio === cita.idServicio);
          return {
            ...cita,
            nombreUsuario: usuario ? usuario.nombre : '',
            nombreServicio: servicio ? servicio.nombre : ''
          };
        });
  })
    )
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
