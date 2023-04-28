import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProduccionService } from '../produccion.service';
import { Produccion } from '../produccion';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit{

  constructor(private productoService:ProduccionService, private router:Router, private route:ActivatedRoute){}

  producto = new Produccion(1,"","",0,"",1);

  ngOnInit() {
    let idProducto = this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(idProducto).subscribe(
      (producto: Produccion) => this.producto = producto
    )
  }


  actualizarDatos(){
    this.productoService.actualizarProducto(this.producto).subscribe();
    this.router.navigate(['lista-productos']);
  }
}
