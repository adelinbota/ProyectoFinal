import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  baseUrl = environment.baseUrl;

  borrarUsuario(usuario: Usuario) {
    return this.http.delete(`${this.baseUrl}/index.php?recurso=usuarios/borrar-usuario/${usuario.idUsuario}`)
  }
  getUsuarios(){
    return this.http.get<Usuario[]>(`${this.baseUrl}/index.php?recurso=usuarios`);
  }
  getUsuario(idUsuario: string | null){
    return this.http.get<Usuario>(`${this.baseUrl}/index.php?recurso=usuarios/${idUsuario}`)
  }
  addUsuario(usuario: Usuario) {
    return this.http.post<Usuario[]>(`${this.baseUrl}/index.php?recurso=usuarios/add-usuario`, usuario)
  }
  actualizarUsuario(usuario: Usuario) {
    return this.http.put(`${this.baseUrl}/index.php?recurso=usuarios/actualizar-usuario/${usuario.idUsuario}`, usuario);
  }

  constructor(private http:HttpClient) { }
}
