import { Component } from '@angular/core';
import { FuncionesService } from '../funciones.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private funciones:FuncionesService, private route:Router, private http:HttpClient){}

  username:string;
  password:string;

  login() {
    const user = { username: this.username, password: encriptar(this.password) };
    this.funciones.comprobar(user).subscribe({
      next: (resultado) => {
        if (resultado) {
          this.funciones.setToken(resultado.token);
          this.route.navigate(['/']);
        } else {
          const errorBox = document.getElementById('error-box');
          if (errorBox) { // Verificar que el elemento exista
            errorBox.style.display = 'block';
            errorBox.innerText = 'El usuario o la contraseña introducidos son incorrectos';
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
function encriptar(password: string) {

}

