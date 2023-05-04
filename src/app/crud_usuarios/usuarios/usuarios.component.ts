import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.usuarioServicio.borrarUsuario(usuario).subscribe(
      () => {
        location.reload();
      }
    );
    
  }

  constructor(private usuarioServicio:UsuarioService) { }

}
