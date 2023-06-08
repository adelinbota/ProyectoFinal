import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../funciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private funciones: FuncionesService, private route: Router) { }

  ngOnInit(): void {
    this.usuarioLogueado = this.funciones.getUsuarioSesion();
    console.log(this.usuarioLogueado)
  }

  usuarioLogueado: any;
  username: string;
  password: string;

  login() {
    const user = { username: this.username, password: this.password };
    this.funciones.comprobar(user).subscribe({
      next: (resultado) => {
        if (resultado) {
          this.funciones.setUsuarioSesion(resultado)
          this.funciones.setToken(resultado.token);
          window.location.href = '/';
        } else {
          const errorBox = document.getElementById('error-box');
          if (errorBox) { // Verificar que el elemento exista
            errorBox.style.display = 'block';
            errorBox.innerText = 'El usuario o la contraseña introducidos son incorrectos';
            this.password = ''
            this.username = ''
          }
        }
      },
      error: (error) => {
        console.error(error);
        alert('Ha ocurrido un error');
      }
    });
  }
}