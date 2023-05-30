import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  obtenerTiposUsuario() {
    return this.http.get<any[]>(`${this.baseUrl}/usuarios/obtenerTiposUsuario`)
  }
  registrarUsuario(usuario: Usuario) {
    console.log(usuario)
    return this.http.post<Usuario[]>(`${this.baseUrl}/usuarios`, usuario)
  }

  baseUrl = environment.baseUrl;

  borrarUsuario(usuario: Usuario) {
    console.log(usuario)
    return this.http.delete(`${this.baseUrl}/usuarios/${usuario.idUsuario}`)
  }
  getUsuarios() {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }
  getUsuario(idUsuario: string | null) {
    return this.http.get<Usuario>(`${this.baseUrl}/usuarios/${idUsuario}`)
  }
  addUsuario(usuario: Usuario) {
    return this.http.post<Usuario[]>(`${this.baseUrl}/usuarios`, usuario)
  }
  actualizarUsuario(usuario: Usuario) {
    return this.http.put(`${this.baseUrl}/usuarios/${usuario.idUsuario}`, usuario);
  }

  constructor(private http: HttpClient) { }
}
