import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{

  heroe: Heroe | undefined;

  obtenerHeroe(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroeService.obtenerHeroe(id).subscribe(heroe => this.heroe = heroe);
  }

  ngOnInit(): void{
    this.obtenerHeroe();
  }

  atras(): void{
    this.location.back();
  }

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroeService,
    private location: Location
  ){

  }
}
