import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {

  accion: number=0;

  constructor(private router:Router, private route:ActivatedRoute, private productoServicio:ProductoService){}

  ngOnInit(): void{

    this.accion = parseInt(this.route.snapshot.queryParams['accion']);

    this.i=this.route.snapshot.params['id']-1;

    let producto:Producto = this.productoServicio.encontrarProducto(this.i);
    this.nombreForm = producto.nombre;
    this.descripcionForm = producto.descripcion;
    this.imagenForm = producto.imagen;
  }
  
  editar(){
    if (this.accion == 1) {
      let miProducto = new Producto(this.nombreForm, this.descripcionForm, this.imagenForm);
      this.productoServicio.editarProducto(this.i, miProducto);
      this.router.navigate(['/productos']);
    }else if (this.accion == 2) {
      this.productoServicio.borrarProducto(this.i);
      this.router.navigate(['/productos']);
    }
  }

  nombreForm:string="";
  descripcionForm:string="";
  imagenForm:string="";

  i:number;
}
