import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuarioLogueadoSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {}

  getUsuarioLogueado(): Observable<any> {
    const hola = this.usuarioLogueadoSubject.asObservable();
    console.log(hola)
    return hola;
  }

  setUsuarioLogueado(usuario: any): void {
    console.log( this.usuarioLogueadoSubject.next(usuario))
    this.usuarioLogueadoSubject.next(usuario);
  }
}
