import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuarioLogueado: any;

  constructor() {}

  getUsuarioLogueado(): any {
    return this.usuarioLogueado;
  }

  setUsuarioLogueado(usuario: any): void {
    this.usuarioLogueado = usuario;
  }
}
