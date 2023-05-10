import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent{

  usuarioSeleccionado: Usuario
  contenido:any
  public usuarios: Observable<Usuario[]> = this.obtenerUsuarios();

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.usuarioServicio.getUsuarios();
  }

  eliminarUsuario(usuario: Usuario){
    console.log(usuario)
    this.usuarioServicio.borrarUsuario(usuario).subscribe();
    this.modal.dismissAll();
    this.usuarios = this.usuarios.pipe(
      map((usuarios: any[]) => usuarios.filter((p: Usuario) => p !== usuario)))
  }

  abrirModal(contenido: any, usuario: Usuario){
    this.usuarioSeleccionado = usuario
    this.modal.open(contenido, {centered: true});
  }

  constructor(private usuarioServicio:UsuarioService, private modal:NgbModal) { }

}
