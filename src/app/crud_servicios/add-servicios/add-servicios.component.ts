import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicio';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-servicios',
  templateUrl: './add-servicios.component.html',
  styleUrls: ['./add-servicios.component.css']
})
export class AddServiciosComponent implements OnInit {

  constructor(private serviciosFunciones:ServiciosService, private router:Router){}
 
  tiposServicio: any[];
  tiposServicioConMayuscula: any[];

  ngOnInit(): void {
    this.serviciosFunciones.obtenerTiposServicio().subscribe( 
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

  nombre: string;
  descripcion: string;
  precio:number;
  duracion:string;
  idTipoServicio:number;

  servicio = new Servicio(1, "", "", 1, "", 1);

  addDatos(){
    this.servicio.nombre = this.nombre
    this.servicio.descripcion = this.descripcion
    this.servicio.precio = this.precio
    this.servicio.duracion = this.duracion
    this.servicio.idTipoServicio = this.idTipoServicio
    this.serviciosFunciones.agregarServicio(this.servicio).subscribe();
    this.router.navigate(['/servicios']);
  }
}
