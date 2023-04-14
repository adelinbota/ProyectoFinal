import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit{

  heroes: Heroe[] = [];
  
  ngOnInit(): void {
    this.obtenerHeroes();
  }

  obtenerHeroes(): void{
    this.heroeService.obtenerHeroes().subscribe(heroes => this.heroes = heroes.slice(0,5));
  }

  constructor(private heroeService: HeroeService){

  }
}
