import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit{
  
  clientes:Cliente[] = [];
  
  constructor(private clienteServicio:ClienteService){}

  ngOnInit(){
    this.clientes = this.clienteServicio.clientes;
  }

  agregar(){
    let cliente = new Cliente(this.nombreForm, this.edadForm, this.telefonoForm);
    this.clientes.push(cliente);
  }

  nombreForm:string="";
  edadForm:number=0;
  telefonoForm:string=""
}

