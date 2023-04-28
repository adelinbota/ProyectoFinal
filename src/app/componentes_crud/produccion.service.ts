import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produccion } from './produccion';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduccionService {
  borrarProducto(producto: Produccion) {
    return this.http.delete(`${this.baseUrl}/eliminar.php?idProducto=${producto.idProducto}`)
  }
  actualizarProducto(producto: Produccion) {
    return this.http.put(`${this.baseUrl}/editar.php`, producto);
  }
  getProducto(id:string | null) {
    return this.http.get<Produccion>(`${this.baseUrl}/obtenerUno.php?idProducto=${id}`);
  }
  getProductos() {
    return this.http.get<Produccion[]>(`${this.baseUrl}/obtener.php`);
  }

  baseUrl = environment.baseUrl

  anadirProducto(producto: Produccion):Observable<any>{
    return this.http.post(`${this.baseUrl}/agregar.php`, producto);
  }

  constructor(private http:HttpClient) { }
}
