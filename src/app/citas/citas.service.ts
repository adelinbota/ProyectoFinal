import { Injectable } from '@angular/core';
import { Cita } from './cita';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../crud_usuarios/usuario';
import { Servicio } from '../crud_servicios/servicio';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  getServicios() {
    return this.http.get<Servicio[]>(`${this.baseUrl}/servicios`)
  }
  getUsuarios(){
    return this.http.get<Usuario[]>(`${this.baseUrl}/usuarios`);
  }
  getCita(idCita: string | null) {
    return this.http.get<Cita>(`${this.baseUrl}/citas/${idCita}`)
  }
  actualizarCita(cita: Cita) {
    return this.http.put(`${this.baseUrl}/citas/${cita.idCita}`, cita);
  }
  anadirCita(cita: Cita) {
    return this.http.post<Cita[]>(`${this.baseUrl}/citas`, cita)
  }

  baseUrl = environment.baseUrl
  eliminarCita(cita: Cita) {
    return this.http.delete<Cita[]>(`${this.baseUrl}/citas/${cita.idCita}`)
  }

  getCitas() {
    return this.http.get<Cita[]>(`${this.baseUrl}/citas`)
  }

  constructor(private http:HttpClient) { }
}
