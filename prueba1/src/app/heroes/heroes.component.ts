import { Component } from '@angular/core';
import { Heroe } from '../heroe';
import { heroes } from '../heroes';
import { HeroeService} from '../heroe.service';
import { MensajeService} from '../mensaje.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  constructor(private heroeService: HeroeService, private mensajeService: MensajeService){
  }

  heroes: Heroe[] = [];

  obtenerHeroes(): void{
    this.heroeService.obtenerHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.obtenerHeroes();
  }
}
