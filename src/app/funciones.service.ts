import { Injectable } from '@angular/core';
import { environment } from './environment/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  getCitas() {
    return this.http.get<any[]>(`${this.baseUrl}/citas`);
  }
  obtenerTiposServicio() {
    return this.http.get<any[]>(`${this.baseUrl}/servicios/obtenerTiposServicio`);
  }
  obtenerTiposProducto() {
    return this.http.get(`${this.baseUrl}/productos/obtenerTiposProducto`);
  }

  baseUrl = environment.baseUrl

  comprobar(user:any): Observable<any> {
    console.log(user);
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
