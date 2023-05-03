import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { environment } from './environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl = environment.baseUrl;

  borrarProducto(usuario: Usuario) {
    return this.http.delete(`${this.baseUrl}/index.php?recurso=productos/borrar-productos/${usuario.idUsuario}`)
  }
  getUsuarios(){
    return this.http.get<Usuario[]>(`${this.baseUrl}/index.php?recurso=productos`);
  }

  constructor(private http:HttpClient) { }
}
