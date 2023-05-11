import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionesService } from 'src/app/funciones.service';

@Component({
  selector: 'app-new-cita',
  templateUrl: './new-cita.component.html',
  styleUrls: ['./new-cita.component.css']
})
export class NewCitaComponent {

  
  constructor(private funciones:FuncionesService, private router:Router){

  }

  tiposServicio: any[];
  tiposServicioConMayuscula: any[];
  
  ngOnInit(): void {
    this.funciones.obtenerTiposServicio().subscribe(
        tipos => {this.tiposServicio = tipos,
        this.tiposServicioConMayuscula = tipos.map(tipo => {
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
  
  idTipoServicio:number

  reservar(){
    alert("FANTASTIQUE")
    this.router.navigate(['/citas']);
  }
  
}
