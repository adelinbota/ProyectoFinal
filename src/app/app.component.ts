import { Component, OnInit } from '@angular/core';
import { FuncionesService } from './funciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'peluqueria';
  usuarioLogueado: any;

  constructor(private funciones: FuncionesService, private route: Router) {
  }

  ngOnInit(): void {
    const userSesion = this.funciones.getUsuarioSesion();
    this.usuarioLogueado = JSON.parse(userSesion)
  }

  cerrarSesion(): void {
    localStorage.removeItem('usuario')
    window.location.href = 'login';
  }

}
