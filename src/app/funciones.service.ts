import { Injectable } from '@angular/core';
import { environment } from './environment/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable} from 'rxjs';
import { Servicio } from './crud_servicios/servicio';
import { Usuario } from './crud_usuarios/usuario';
import { Cita } from './citas/cita';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  getUsuarios() {
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }
  getServicios() {
    return this.http.get<Servicio[]>(`${this.baseUrl}/servicios`);
  }
  getCitas() {
    return this.http.get<Cita[]>(`${this.baseUrl}/citas`);
  }
  obtenerTiposServicio() {
    return this.http.get<any[]>(`${this.baseUrl}/servicios/obtenerTiposServicio`);
  }
  obtenerTiposProducto() {
    return this.http.get(`${this.baseUrl}/productos/obtenerTiposProducto`);
  }

  baseUrl = environment.baseUrl

  comprobar(user:any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios/login`, user)
  }
  
  setToken(token:string){
    this.cookies.set('token', token);
  }

  getToken(){
    return this.cookies.get('token');
  }

  constructor(private http:HttpClient, private cookies:CookieService) { }
}
