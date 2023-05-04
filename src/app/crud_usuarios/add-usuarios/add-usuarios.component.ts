import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.component.html',
  styleUrls: ['./add-usuarios.component.css']
})
export class AddUsuariosComponent {
  
  constructor(private usuarioService: UsuarioService, private router:Router){}
  username:string;
  password:string;
  nombre:string;
  apellidos:string;
  telefono:string;
  email:string;
  cp:string;
  fechaNac:string;
  idTipoUsuario:number;
  
  usuario = new Usuario(1, "", "","","", "", "", "", "", 10);

  addDatos(){
    this.usuario.username = this.username;
    this.usuario.password = this.password;
    this.usuario.nombre = this.nombre;
    this.usuario.apellidos = this.apellidos;
    this.usuario.telefono = this.telefono;
    this.usuario.email = this.email;
    this.usuario.cp = this.cp;
    this.usuario.fechaNac = this.fechaNac;
    this.usuario.idTipoUsuario = this.idTipoUsuario;
    this.usuarioService.addUsuario(this.usuario).subscribe();
    this.router.navigate(['/usuarios']);
  }
}
