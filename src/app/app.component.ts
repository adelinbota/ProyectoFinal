import { Component, OnInit } from '@angular/core';
import { FuncionesService } from './funciones.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Usuario } from './crud_usuarios/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'peluqueria';
  logueado = true
  usuarioLogueado: any;

  constructor(private funciones: FuncionesService, private route: Router, private userService: UserService) {
    console.log(this.usuarioLogueado)
   }

  ngOnInit(): void {
    this.userService.getUsuarioLogueado().subscribe((usuario: any) => {
      this.usuarioLogueado = usuario;
      console.log(usuario)
    });
  }

  cerrarSesion(): void {
    this.userService.setUsuarioLogueado(null);
    this.route.navigate(['/login']);
  }

}
