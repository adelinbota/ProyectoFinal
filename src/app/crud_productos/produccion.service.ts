import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produccion } from './produccion';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduccionService {
  baseUrl = environment.baseUrl
  
  borrarProducto(producto: Produccion) {
    return this.http.delete(`${this.baseUrl}/index.php?recurso=productos/borrar-productos/${producto.idProducto}`)
  }
  actualizarProducto(producto: Produccion) {
    return this.http.put(`${this.baseUrl}/index.php?recurso=productos/actualizar-productos/${producto.idProducto}`, producto);
  }
  getProducto(id:string | null) {
    return this.http.get<Produccion>(`${this.baseUrl}/index.php?recurso=productos/${id}`);
  }
  getProductos() {
    return this.http.get<Produccion[]>(`${this.baseUrl}/index.php?recurso=productos`);
  }
  anadirProducto(producto: Produccion){
    return this.http.post(`${this.baseUrl}/index.php?recurso=productos/add-productos`, producto);
  }

  constructor(private http:HttpClient) { }
}
