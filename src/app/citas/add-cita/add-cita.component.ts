import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/funciones.service';
import { Cita } from '../cita';
import { CitasService } from '../citas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent implements OnInit {

  constructor(private funciones:FuncionesService, private funcionesCita:CitasService, private router:Router){}
  
  ngOnInit(): void {
    this.funciones.getUsuarios().subscribe(
    usuarios => {
      this.usuarios =  usuarios.map(usuario => {
        return {
          nombre: usuario.nombre
        };
      });
    },
    error => {
      console.error(error);
    })
    this.funciones.getServicios().subscribe(
      servicios => {
      this.servicios =  servicios.map(servicio => {
        return {
          nombre: servicio.nombre
        };
      });
    },
    error => {
      console.error(error);
    });
  }

  public usuarios:any[];
  public servicios:any[];

  datosPersona:string;
  idUsuario:number;
  fechaCita:string;
  idServicio:number;
  tiposServicioConMayuscula:any

  cita : Cita = {
    idCita : 1,
    fechaCita: '',
    comentarios: '',
    idServicio: 1,
    idUsuario:1
  }

  addDatos(){
    this.funcionesCita.anadirCita(this.cita).subscribe();
    this.router.navigate(['/citas']);
  }
}
