import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { Observable } from 'rxjs';
import { TipoProducto } from '../tipoProducto';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit{

  producto = new Producto(1,"","",1,"",0,1);
  tiposProducto: TipoProducto[];

  constructor(private productoService:ProductoService, private router:Router, private route:ActivatedRoute){}

  ngOnInit() {
    let idProducto = this.route.snapshot.paramMap.get('idProducto');
    this.productoService.getProducto(idProducto).subscribe(
      (producto: Producto) => {
        this.producto = producto;
      }
    );

    this.productoService.obtenerTiposProducto().subscribe(
      (tiposProducto: TipoProducto[]) => {
        this.tiposProducto = tiposProducto;
      }
    );
  }  
  
  actualizarDatos(){
    this.productoService.actualizarProducto(this.producto).subscribe();
    this.router.navigate(['productos']);
  }
}
