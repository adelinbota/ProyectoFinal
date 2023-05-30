import { Component } from '@angular/core';
import { Contacto } from '../contacto/contacto';
import { FuncionesService } from '../funciones.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  logueado = false

  constructor(private funciones:FuncionesService){}

  public contactosAct: Observable<Contacto[]> = this.funciones.getContactosActivos();
}
