import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { FuncionesService } from 'src/app/funciones.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-anadir-producto',
  templateUrl: './anadir-producto.component.html',
  styleUrls: ['./anadir-producto.component.css']
})
export class AnadirProductoComponent implements OnInit {

  baseUrl = environment.baseUrl
  tipoProducto: any[];
  tiposProductoConMayuscula: any[];

  ngOnInit(): void {
    this.productoService.obtenerTiposProducto().subscribe(
      tipos => {
        console.log(tipos);
        this.tipoProducto = tipos;
        this.tiposProductoConMayuscula = tipos.map(tipo => {
          return {
            idTipoProducto: tipo.idTipoProducto,
            nombre: this.capitalize(tipo.nombre)
          };
        });
      },
      error => {
        console.error(error);
      }
    );
  }
  
  capitalize(str: string): string {
    return str.replace(/\b\w/g, c => c.toUpperCase());
  }

  constructor(private router: Router, private productoService: ProductoService, private http:HttpClient){
    
  };
  nombreProducto:string;
  descripcionProducto:string;
  precioProducto:number;
  rutaImagenProducto:string;
  idTipoProducto:number;
  

  productoModelo = new Producto(1,"","",0,"",0,1);

  addDatos(){
    this.productoModelo.nombreProducto = this.nombreProducto;
    this.productoModelo.descripcionProducto = this.descripcionProducto;
    this.productoModelo.precioProducto = this.precioProducto;
    this.productoModelo.rutaImagenProducto = this.rutaImagenProducto;
    this.productoModelo.idTipoProducto = this.idTipoProducto;
    console.log(this.productoModelo);
    this.productoService.anadirProducto(this.productoModelo).subscribe(
    );
    this.router.navigate(["/productos"]);
  }

}

