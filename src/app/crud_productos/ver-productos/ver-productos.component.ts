import { Component, OnInit } from '@angular/core';
import { Produccion } from '../produccion';
import { ProduccionService } from '../produccion.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent{

  public productos: Observable<Produccion[]> = this.obtenerProductos();

  obtenerProductos(): Observable<Produccion[]> {
    return this.productoServicio.getProductos();
  }

  constructor(private productoServicio:ProduccionService) { }

  eliminarProducto(producto: Produccion){
    this.productoServicio.borrarProducto(producto).subscribe(
      () => {
        location.reload();
      }
    );
    
  }
}
