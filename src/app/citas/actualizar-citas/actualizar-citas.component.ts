import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita';
import { FuncionesService } from 'src/app/funciones.service';
import { CitasService } from '../citas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-citas',
  templateUrl: './actualizar-citas.component.html',
  styleUrls: ['./actualizar-citas.component.css']
})
export class ActualizarCitasComponent implements OnInit {

  constructor(private citasServicio: CitasService, private route: ActivatedRoute, funciones: FuncionesService, private router: Router) { }

  public usuarios: any[];
  public servicios: any[];

  ngOnInit(): void {
    let idCita = this.route.snapshot.paramMap.get('idCita');
    this.citasServicio.getCita(idCita).subscribe(
      (cita: Cita) => {
        this.cita = cita
        console.log(cita)
      });
    this.citasServicio.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios.map(usuario => {
          return {
            idUsuario: usuario.idUsuario,
            nombre: usuario.nombre
          };
        });
      },
      error => {
        console.error(error);
      })
    this.citasServicio.getServicios().subscribe(
      servicios => {
        this.servicios = servicios.map(servicio => {
          return {
            idServicio: servicio.idServicio,
            nombre: servicio.nombre
          };
        });
      },
      error => {
        console.error(error);
      });
  }

  cita = new Cita(1, "", "", "", "", 1, 1);

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

  actualizar() {
    this.citasServicio.actualizarCita(this.cita).subscribe();
    this.router.navigate(['/citas']);
  }

}
