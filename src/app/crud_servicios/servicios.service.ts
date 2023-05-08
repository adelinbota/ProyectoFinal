import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { Servicio } from './servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  actualizarServicio(servicio: Servicio) {
    return this.http.put<Servicio[]>(`${this.baseUrl}/servicios/${servicio.idServicio}`, servicio)
  }
  getServicio(idServicio: string | null) {
    return this.http.get<Servicio>(`${this.baseUrl}/servicios/${idServicio}`)
  }

  eliminarServicio(servicio: Servicio) {
    return this.http.delete<Servicio[]>(`${this.baseUrl}/servicios/${servicio.idServicio}`)
  }
  obtenerTiposServicio() {
    return this.http.get<Servicio[]>(`${this.baseUrl}/servicios/obtenerTiposServicio`)
  }
  agregarServicio(servicio: Servicio) {
    return this.http.post<Servicio[]>(`${this.baseUrl}/servicios`, servicio)
  }

  baseUrl = environment.baseUrl

  getServicios() {
    return this.http.get<Servicio[]>(`${this.baseUrl}/servicios`)
  }

  constructor(private http:HttpClient) { }
}
