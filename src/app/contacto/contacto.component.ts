import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  variable = true;
  valoracion:number
  resena:string

  setValoracion(valor:number){
    this.valoracion = valor
  }
}
