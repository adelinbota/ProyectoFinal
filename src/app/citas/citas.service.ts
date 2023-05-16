import { Injectable } from '@angular/core';
import { Cita } from './cita';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  baseUrl = environment.baseUrl
  eliminarCita(cita: Cita) {
    return this.http.delete<Cita[]>(`${this.baseUrl}/citas/${cita.idCita}`)
  }

  getCitas() {
    return this.http.get<Cita[]>(`${this.baseUrl}/citas`)
  }

  constructor(private http:HttpClient) { }
}
