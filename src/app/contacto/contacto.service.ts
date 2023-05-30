import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  baseUrl = environment.baseUrl

  addContacto(contacto: Contacto) {
    return this.http.post<Contacto[]>(`${this.baseUrl}/contactos`, contacto)
  }

  getContactos() {
    return this.http.get<Contacto[]>(`${this.baseUrl}/contactos`)
  }

  publicar(contacto: Contacto) {
    return this.http.put(`${this.baseUrl}/contactos/publicar/${contacto.idContacto}`, contacto);
  }

  quitar(contacto: Contacto) {
    return this.http.put(`${this.baseUrl}/contactos/quitar/${contacto.idContacto}`, contacto);
  }

  eliminar(contacto: Contacto) {
    return this.http.delete<Contacto[]>(`${this.baseUrl}/contactos/${contacto.idContacto}`)
  }

  constructor(private http:HttpClient) { }
}
