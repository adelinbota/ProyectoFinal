import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionesService } from 'src/app/funciones.service';

@Component({
  selector: 'app-new-cita',
  templateUrl: './new-cita.component.html',
  styleUrls: ['./new-cita.component.css']
})
export class NewCitaComponent {


  constructor(private funciones: FuncionesService, private router: Router) {

  }

  usuarioLogueado: any
  servicio: any[];
  servicioConMayuscula: any[];

  ngOnInit(): void {
    const userSesion = this.funciones.getUsuarioSesion();
    this.usuarioLogueado = JSON.parse(userSesion);
    this.funciones.getServicios().subscribe(
      tipos => {
        this.servicio = tipos,
        this.servicioConMayuscula = tipos.map(tipo => {
          return {
            idTipoServicio: tipo.idTipoServicio,
            nombre: this.capitalize(tipo.nombre)
          };
        })
      }
    )
  }

  capitalize(nombre: string): string {
    return nombre.replace(/\b\w/g, c => c.toUpperCase());
  }

  idTipoServicio: number

  reservar() {
    alert("FANTASTIQUE")
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
