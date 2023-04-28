import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  constructor(private servicioProducto:ProductoService){}

  productos:Producto[] = []

  ngOnInit(): void {
    this.servicioProducto.obtenerProductos().subscribe(misProductos=>{

      this.productos=Object.values(misProductos)
    
      this.servicioProducto.setProductos(this.productos);
    })
  }

  agregar(){
    let producto = new Producto(this.nombreForm, this.descripcionForm, this.imagenForm) ;
    this.servicioProducto.agregarProducto(producto);
  }

  nombreForm:string="";
  descripcionForm:string="";
  imagenForm:string="";
}
