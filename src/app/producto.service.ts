import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  setProductos(misProductos:Producto[]){
    this.productos=misProductos;
  }

  obtenerProductos(){
    return this.datosServicio.cargarProductos();
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);

    this.datosServicio.guardarProductos(this.productos)
  }
  borrarProducto(i: number) {
    this.productos.splice(i,1);

    this.datosServicio.eliminarProducto(i);

    this.datosServicio.guardarProductos(this.productos);
  }
  editarProducto(i: number, miProducto: Producto) {

    let productoEdit = this.productos[i];
    
    productoEdit.nombre = miProducto.nombre;
    productoEdit.descripcion = miProducto.descripcion;
    productoEdit.imagen = miProducto.imagen;

    this.datosServicio.editarProducto(i, miProducto);
  }

  encontrarProducto(i: number) {
    let producto:Producto=this.productos[i];

    return producto;
  }

  constructor(private datosServicio:DatosService) { }

  productos: Producto[] = [
    // new Producto("Laca Pantene", "Fijación de pelo", "../../assets/img/laca_pantene"),
    // new Producto("Crema de manos Nivea", "Suavidad para la piel", "../../assets/img/crema_manos"),
    // new Producto("Maquinilla Philips", "Depilación táctica", "../../assets/img/phillips"),
    // new Producto("Champú Old Spice", "Huele como un tío, tío", "../../assets/img/old_spice.jpg"),
    // new Producto("Desodorante AXE", "Dark Tentation", "../../assets/img/axe.jpg"),
    // new Producto("Mascarilla capilar Naturalium", "Perfección facial", "../../assets/img/masc_capilar.jpg"),
    // new Producto("Gel Aminexyl", "Fase de caída", "../../assets/img/aminexil.jpg"),
    // new Producto("Plancha GHD Gold", "Cabello basculado", "../../assets/img/plancha")
  ];

  

}
