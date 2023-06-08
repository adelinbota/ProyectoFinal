import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto/contacto';
import { FuncionesService } from '../funciones.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuarioLogueado: any;

  ngOnInit(): void {
    const userSesion = this.funciones.getUsuarioSesion();
    this.usuarioLogueado = JSON.parse(userSesion)
  }

  constructor(private funciones:FuncionesService){}

  public contactosAct: Observable<Contacto[]> = this.funciones.getContactosActivos();
}
