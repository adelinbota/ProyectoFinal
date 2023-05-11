import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../funciones.service';
import { TiposServicio } from '../crud_servicios/tiposServicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit{

  constructor(private funciones:FuncionesService, private router:Router){

  }
  ngOnInit(): void {
    this.funciones.getCitas().subscribe();
  }

}
