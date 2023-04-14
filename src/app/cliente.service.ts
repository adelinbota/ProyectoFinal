import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  obtenerClientes() {
    let clienteLista = this.clientes;

    return clienteLista;
  }
  borrarCliente(indice: number) {
    this.clientes.splice(indice,1);
  }
  encontrarCliente(indice: number) {
    let cliente:Cliente = this.clientes[indice];

    return cliente;
  }
  editarCliente(indice: number, miCliente: Cliente) {
    let cliente = this.clientes[indice];

    cliente.nombre = miCliente.nombre;
    cliente.edad = miCliente.edad;
    cliente.telefono = miCliente.telefono;
  }

  constructor() { }

  clientes:Cliente[] = [
    new Cliente("Anca", 25, "123456789"),
    new Cliente("Raul", 44, "123456798"),
    new Cliente("Alberto", 38, "123456879"),
    new Cliente("Lidia", 31, "123456897"),
    new Cliente("Toni", 39, "123456978"),
    new Cliente("Rebeca", 40, "123456987"),
    new Cliente("Victoria", 32, "123465789"),
    new Cliente("Diana", 30, "123465798"),
    new Cliente("Jonatan", 25, "123465897"),
    new Cliente("Benjamin", 22, "123465879"),
    new Cliente("Natalia", 20, "123465978"),
    new Cliente("Noemí", 21, "123465987"),
    new Cliente("Paula", 29, "123546789"),
    new Cliente("Daniel", 32, "123546798")
  ];
}
