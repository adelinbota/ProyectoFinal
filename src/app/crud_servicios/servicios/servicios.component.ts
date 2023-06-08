import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Servicio } from '../servicio';
import { Observable, map } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FuncionesService } from 'src/app/funciones.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  ngOnInit(): void {
    const userSesion = this.funciones.getUsuarioSesion();
    this.usuarioLogueado = JSON.parse(userSesion)
  }

  usuarioLogueado: any;
  servicioSeleccionado: Servicio
  contenido: any
  public servicios: Observable<Servicio[]> = this.serviciosFunciones.getServicios()

  constructor(private serviciosFunciones: ServiciosService, private modal: NgbModal, private funciones: FuncionesService) { }

  eliminarServicio(servicio: Servicio) {
    this.serviciosFunciones.eliminarServicio(servicio).subscribe();
    this.servicios = this.servicios.pipe(
      map((servicios: any[]) => servicios.filter((p: Servicio) => p !== servicio)))
    this.modal.dismissAll();
  }

  abrirModal(contenido: any, servicio: Servicio) {
    this.servicioSeleccionado = servicio
    this.modal.open(contenido, { centered: true })
  }

  abreviarTexto(texto: string, longitudMaxima: number): string {
    if (texto.length > longitudMaxima) {
      return texto.substr(0, longitudMaxima) + '...';
    } else {
      return texto;
    }
  }
}
