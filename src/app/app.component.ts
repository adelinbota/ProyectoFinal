import { Component, OnInit } from '@angular/core';
import { FuncionesService } from './funciones.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'peluqueria';
  logueado = true
  usuarioLogueado: any;

  constructor(private funciones: FuncionesService, private route: Router, private userService: UserService) { }

  cerrarSesion(): void {
    this.userService.setUsuarioLogueado(null);
    this.route.navigate(['/login']);
  }

}
