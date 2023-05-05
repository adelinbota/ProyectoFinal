import { Component } from '@angular/core';
import { FuncionesService } from '../funciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private funciones:FuncionesService, private route:Router){}

  username:string;
  password:string;

  login(){
    alert("Usuario: " + this.username + ". Contraseña: " + this.password);
    this.funciones.comprobar(this.username, this.password).subscribe(
      (resultado) => {
        if (resultado) {
          this.route.navigate(['/']);
        } else {
          alert('Usuario o contraseña incorrectos');
        }
      },
      (error) => {
        console.error(error);
        alert('Ha ocurrido un error');
      }
    );
  }
}
