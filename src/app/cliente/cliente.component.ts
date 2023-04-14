import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  constructor(private router:ActivatedRoute, private route:Router, private clienteServicio:ClienteService){

  }

  ngOnInit():void{
    this.indice=this.router.snapshot.params['id']-1;

    let cliente:Cliente = this.clienteServicio.encontrarCliente(this.indice);

    this.nombreForm = cliente.nombre;
    this.edadForm = cliente.edad;
    this.telefonoForm = cliente.telefono;
  }

  editar(){
    let miCliente = new Cliente(this.nombreForm, this.edadForm, this.telefonoForm);
    this.clienteServicio.editarCliente(this.indice, miCliente);
    this.route.navigate(['/clientes']);
  }

  borrar(){
    this.clienteServicio.borrarCliente(this.indice);
    this.route.navigate(['/clientes']);
  }

  nombreForm:string="";
  edadForm:number=0;
  telefonoForm:string=""

  indice:number;

}
