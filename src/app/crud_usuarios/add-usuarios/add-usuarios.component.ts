import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-usuarios',
  templateUrl: './add-usuarios.component.html',
  styleUrls: ['./add-usuarios.component.css']
})
export class AddUsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  tiposUsuario: any[];
  tiposUsuarioConMayuscula: any[];

  ngOnInit(): void {
    this.usuarioService.obtenerTiposUsuario().subscribe(
      tipos => {
        this.tiposUsuario = tipos;
        this.tiposUsuarioConMayuscula = tipos.map(tipo => {
          return {
            idTipoUsuario: tipo.idTipoUsuario,
            nombre: this.capitalize(tipo.nombre)
          };
        });
      },
      error => {
        console.error(error);
      })
  }

  capitalize(str: string): string {
    return str.replace(/\b\w/g, c => c.toUpperCase());
  }

  username: string;
  password: string;
  nombre: string;
  apellidos: string;
  telefono: string;
  email: string;
  cp: string;
  fechaNac: string;
  idTipoUsuario: number;

  usuario = new Usuario(1, "", "", "", "", "", "", "", "", 10);

  addDatos() {
    this.usuario.username = this.username;
    this.usuario.password = this.password;
    this.usuario.nombre = this.nombre;
    this.usuario.apellidos = this.apellidos;
    this.usuario.telefono = this.telefono;
    this.usuario.email = this.email;
    this.usuario.cp = this.cp;
    this.usuario.fechaNac = this.fechaNac;
    this.usuario.idTipoUsuario = this.idTipoUsuario;
    console.log(this.usuario);
    this.usuarioService.addUsuario(this.usuario).subscribe();
    this.router.navigate(['/usuarios']);
  }
}
