import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Servicio } from '../servicio';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  public servicios: Observable<Servicio[]> = this.serviciosFunciones.getServicios()

  constructor(private serviciosFunciones:ServiciosService){}

  eliminarServicio(servicio:Servicio){
    this.serviciosFunciones.eliminarServicio(servicio).subscribe();
    this.servicios = this.servicios.pipe(
      map((servicios: any[]) => servicios.filter((p: Servicio) => p !== servicio)))
  }
}
