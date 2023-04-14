import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private httpClient:HttpClient) { }

  guardarProductos(productos:Producto[]){
    this.httpClient.put('https://peluaa-78f91-default-rtdb.europe-west1.firebasedatabase.app/datos.json', productos).subscribe(
      response=>console.log("Se han guardado los productos: " + response),

      error=>console.log("Error en la inserción " + error)
    );
  }

  cargarProductos(){
    return this.httpClient.get('https://peluaa-78f91-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
  }

  editarProducto(i:number, producto:Producto){

    let url = 'https://peluaa-78f91-default-rtdb.europe-west1.firebasedatabase.app/datos/' + i + '.json';

    this.httpClient.put(url,producto).subscribe(

    response=>console.log("Se han editado los productos: " + response),

    error=>console.log("Error en la edición " + error)
    );
  }

  eliminarProducto(i:number){
    let url = 'https://peluaa-78f91-default-rtdb.europe-west1.firebasedatabase.app/datos' + i + '.json';

    this.httpClient.delete(url).subscribe(

    response=>console.log("Se han borrado los productos: " + response),

    error=>console.log("Error en la edición " + error)
    );
  }
}
