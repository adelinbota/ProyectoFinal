import { Injectable } from '@angular/core';
import { environment } from './environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  obtenerTiposProducto() {
    return this.http.get(`${this.baseUrl}/productos/obtenerTiposProducto`);
  }

  baseUrl = environment.baseUrl

  comprobar(username: string, password: string) {
    alert(username + password)
    return this.http.post(`${this.baseUrl}/login.php`, {username, password})
  }

  constructor(private http:HttpClient) { }
}
