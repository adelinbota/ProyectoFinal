import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from '../servicio';
import { TiposServicio } from '../tiposServicio';

@Component({
  selector: 'app-actualizar-servicios',
  templateUrl: './actualizar-servicios.component.html',
  styleUrls: ['./actualizar-servicios.component.css']
})
export class ActualizarServiciosComponent implements OnInit{

  constructor(private serviciosFunciones:ServiciosService, private route:ActivatedRoute, private router:Router){}
  
  servicio = new Servicio(1,"","",0,"",1);
  tipoServicio: TiposServicio[];

  ngOnInit(): void {
    let idServicio = this.route.snapshot.paramMap.get('idServicio');
    this.serviciosFunciones.getServicio(idServicio).subscribe(
      (servicio: Servicio) => this.servicio = servicio
    )

    this.serviciosFunciones.obtenerTiposServicio().subscribe(
      (tipoServicio: TiposServicio[]) => {
        this.tipoServicio = tipoServicio
      })
  }

  actualizar(){
    this.serviciosFunciones.actualizarServicio(this.servicio).subscribe();
    this.router.navigate(['/servicios']);
  }
}
