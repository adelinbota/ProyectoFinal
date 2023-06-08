import { Injectable } from '@angular/core';
import { environment } from './environment/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Servicio } from './crud_servicios/servicio';
import { Usuario } from './crud_usuarios/usuario';
import { Cita } from './citas/cita';
import { Contacto } from './contacto/contacto';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  setUsuarioSesion(usuario: any) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuarioSesion(): any {
    return localStorage.getItem('usuario');
  }

  agregarCita(cita: Cita) {
    return this.http.post<Cita[]>(`${this.baseUrl}/citas`, cita)
  }
  actualizarCita(cita: Cita) {
    return this.http.put(`${this.baseUrl}/citas/${cita.idCita}`, cita);
  }
  eliminarCita(cita: Cita) {
    return this.http.delete<Cita[]>(`${this.baseUrl}/citas/${cita.idCita}`)
  }
  getContactosActivos() {
    return this.http.get<Contacto[]>(`${this.baseUrl}/contactos/activos`)
  }
  getUsuarios() {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }
  getServicios() {
    return this.http.get<Servicio[]>(`${this.baseUrl}/servicios`);
  }
  getCitas() {
    return this.http.get<Cita[]>(`${this.baseUrl}/citas`);
  }
  getCitasPelo() {
    return this.http.get<Cita[]>(`${this.baseUrl}/citas/pelo`);
  }
  getCitasUnas() {
    return this.http.get<Cita[]>(`${this.baseUrl}/citas/unas`);
  }
  getCitasUsuario(idTipoUsuario: number) {
    return this.http.get<Cita[]>(`${this.baseUrl}/citas/${idTipoUsuario}`);
  }
  obtenerTiposServicio() {
    return this.http.get<any[]>(`${this.baseUrl}/servicios/obtenerTiposServicio`);
  }
  obtenerTiposProducto() {
    return this.http.get(`${this.baseUrl}/productos/obtenerTiposProducto`);
  }

  baseUrl = environment.baseUrl

  comprobar(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios/login`, user)
  }

  setToken(token: string) {
    this.cookies.set('token', token);
  }

  getToken() {
    return this.cookies.get('token');
  }

  constructor(private http: HttpClient, private cookies: CookieService) { }
}
