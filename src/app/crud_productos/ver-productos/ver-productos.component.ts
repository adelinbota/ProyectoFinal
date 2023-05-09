import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Observable, map, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent{

  public productos: Observable<Producto[]> = this.obtenerProductos();

  obtenerProductos(): Observable<Producto[]> {
    return this.productoServicio.getProductos();
  }

  constructor(private productoServicio:ProductoService, private router:Router) { }

  eliminarProducto(producto: Producto): void{
    this.productoServicio.borrarProducto(producto).subscribe();
    this.productos = this.productos.pipe(
      map((productos: any[]) => productos.filter((p: Producto) => p !== producto))
    );
    
  }

  ponerVenta(producto: Producto): void{
    this.productoServicio.ponerVenta(producto).subscribe()
    this.productos = this.productos.pipe(
      map((productos: any[]) => productos.filter((p: Producto) => p !== producto))
    );;
  }

  quitarVenta(producto: Producto): void{
    this.productoServicio.quitarVenta(producto).subscribe(() => {
    this.productos = this.productos.pipe(
      map((productos: any[]) => productos.filter((p: Producto) => p !== producto))
    );;
    });
  }
}
