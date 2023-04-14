import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes: string[] = [];

  anadir(mensaje: string){
    this.mensajes.push(mensaje);
  }

  borrar(){
    this.mensajes = [];
  }
  
  constructor() { }
}
