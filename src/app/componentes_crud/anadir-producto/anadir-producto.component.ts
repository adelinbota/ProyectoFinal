import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produccion } from '../produccion';
import { ProduccionService } from '../produccion.service';

@Component({
  selector: 'app-anadir-producto',
  templateUrl: './anadir-producto.component.html',
  styleUrls: ['./anadir-producto.component.css']
})
export class AnadirProductoComponent {

  constructor(private router: Router, private produccionService: ProduccionService){
    
  };
  nombreProducto:string;
  descripcionProducto:string;
  precioProducto:number;
  rutaImagenProducto:string;
  idTipoProducto:number;
  

  productoModelo = new Produccion(1, "","",2,"",0);

  addDatos(){
    this.productoModelo.nombreProducto = this.nombreProducto;
    this.productoModelo.descripcionProducto = this.descripcionProducto;
    this.productoModelo.precioProducto = this.precioProducto;
    this.productoModelo.rutaImagenProducto = this.rutaImagenProducto;
    this.productoModelo.idTipoProducto = this.idTipoProducto;
    console.log(this.productoModelo);
    this.produccionService.anadirProducto(this.productoModelo).subscribe(
    );
    this.router.navigate(["/lista-productos"]);
  }

}
