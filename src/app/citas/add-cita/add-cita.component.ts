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

  constructor(private funciones: FuncionesService, private funcionesCita: CitasService, private router: Router) { }

  ngOnInit(): void {
    this.funciones.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios.map(usuario => {
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
        this.servicios = servicios.map(servicio => {
          return {
            nombre: servicio.nombre
          };
        });
      },
      error => {
        console.error(error);
      });
  }

  public usuarios: any[];
  public servicios: any[];

  datosPersona: string;
  idUsuario: number;
  fechaCita: string;
  idServicio: number;
  tiposServicioConMayuscula: any

  cita = new Cita(1,"","","",1,1)

  addDatos() {
    this.funcionesCita.anadirCita(this.cita).subscribe();
    console.log(this.cita);
    this.router.navigate(['/citas']);
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
