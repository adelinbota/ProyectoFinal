import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent{

  public usuarios: Observable<Usuario[]> = this.obtenerUsuarios();

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.usuarioServicio.getUsuarios();
  }

  eliminarUsuario(usuario: Usuario){
    this.usuarioServicio.borrarUsuario(usuario).subscribe();
    this.usuarios = this.usuarios.pipe(
      map((usuarios: any[]) => usuarios.filter((p: Usuario) => p !== usuario)))
  }

  constructor(private usuarioServicio:UsuarioService) { }

}
