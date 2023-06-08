import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Observable, map } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FuncionesService } from 'src/app/funciones.service';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit{

  ngOnInit(): void {
    const userSesion = this.funciones.getUsuarioSesion();
    this.usuarioLogueado = JSON.parse(userSesion)
  }

  usuarioLogueado: any
  contenido: any
  productoSeleccionado: Producto
  public productos: Observable<Producto[]> = this.obtenerProductos();
  public productosActivos: Observable<Producto[]> = this.obtenerProductosActivos();

  obtenerProductos(): Observable<Producto[]> {
    return this.productoServicio.getProductos();
  }
  
  obtenerProductosActivos(): Observable<Producto[]> {
    return this.productoServicio.getProductosActivos();
  }

  constructor(private productoServicio: ProductoService, private modal: NgbModal, private funciones: FuncionesService) { }

  eliminarProducto(producto: Producto): void {
    this.productoServicio.borrarProducto(producto).subscribe();
    this.productos = this.productos.pipe(
      map((productos: any[]) => productos.filter((p: Producto) => p !== producto))
    );
  }

  abrirModal(contenido: any, producto: Producto) {
    this.productoSeleccionado = producto;
    this.modal.open(contenido, { centered: true })
  }

  ponerVenta(producto: Producto): void {
    this.productoServicio.ponerVenta(producto).subscribe()
    this.productos = this.productos.pipe(
      map((productos: any[]) => productos.filter((p: Producto) => p !== producto))
    );
    this.modal.dismissAll();
  }

  quitarVenta(producto: Producto): void {
    this.productoServicio.quitarVenta(producto).subscribe(() => {
      this.productos = this.productos.pipe(
        map((productos: any[]) => productos.filter((p: Producto) => p !== producto))
      );;
    });
  }

  abreviarTexto(texto: string, longitudMaxima: number): string {
    if (texto.length > longitudMaxima) {
      return texto.substr(0, longitudMaxima) + '...';
    } else {
      return texto;
    }
  }
}
