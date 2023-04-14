import { Injectable } from '@angular/core'; 
import { Heroe } from './heroe';
import { heroes} from './heroes';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  obtenerHeroes(): Observable<Heroe[]>{
    const heroes1 = of(heroes);
    this.mensaje.anadir('Héroes preparados');
    return heroes1;
  }

  obtenerHeroe(id: number) : Observable<Heroe> {
    const heroe = heroes.find(h => h.id === id)!;
    this.mensaje.anadir(`Numero ${id}`);
    return of(heroe);
  }

  constructor(private mensaje: MensajeService) {

  }
}
