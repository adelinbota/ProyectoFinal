import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl = environment.baseUrl
  
  borrarProducto(producto: Producto) {
    return this.http.delete(`${this.baseUrl}/productos/${producto.idProducto}`)
  }
  actualizarProducto(producto: Producto) {
    return this.http.put(`${this.baseUrl}/productos/${producto.idProducto}`, producto);
  }
  getProducto(id:string | null) {
    return this.http.get<Producto>(`${this.baseUrl}/productos/${id}`);
  }
  getProductos() {
    return this.http.get<Producto[]>(`${this.baseUrl}/productos`);
  }
  anadirProducto(producto: Producto){
    return this.http.post(`${this.baseUrl}/productos`, producto);
  }
  obtenerTiposProducto() {
    return this.http.get<any[]>(`${this.baseUrl}/productos/obtenerTiposProducto`);
  }
  ponerVenta(producto: Producto) {
    return this.http.put(`${this.baseUrl}/productos/ponerVenta/${producto.idProducto}`, producto);
  }
  quitarVenta(producto: Producto) {
    return this.http.put(`${this.baseUrl}/productos/quitarVenta/${producto.idProducto}`, producto);
  }

  constructor(private http:HttpClient) { }
}
