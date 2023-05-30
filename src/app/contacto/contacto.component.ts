import { Component } from '@angular/core';
import { Contacto } from './contacto';
import { ContactoService } from './contacto.service';
import { Observable, map } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(private contactoServicio: ContactoService, private modal: NgbModal) { }

  public contactos: Observable<Contacto[]> = this.contactoServicio.getContactos();

  contactoSeleccionado:Contacto
  contenido:any
  variable = false;
  valoracion: number
  resena: string

  setValoracion(valor: number) {
    this.valoracion = valor
  }

  nombre: string;
  correo: string;
  mensaje: string;
  contacto = new Contacto(1, "", "", "", 1, "", 0);

  addContacto() {
    this.contacto.nombre = this.nombre
    this.contacto.correo = this.correo
    this.contacto.mensaje = this.mensaje
    this.contacto.valoracion = this.valoracion
    this.contacto.resena = this.resena
    this.contactoServicio.addContacto(this.contacto).subscribe();
    console.log(this.contacto)
    window.location.reload();
  }

  publicar(contacto: Contacto): void {
    this.contactoServicio.publicar(contacto).subscribe()
    this.contactos = this.contactos.pipe(
      map((contactos: any[]) => contactos.filter((c: Contacto) => c !== contacto))
    );
  }

  quitar(contacto: Contacto): void {
    this.contactoServicio.quitar(contacto).subscribe(() => {
      this.contactos = this.contactos.pipe(
        map((contactos: any[]) => contactos.filter((c: Contacto) => c !== contacto))
      );;
    });
  }

  eliminar(contacto: Contacto): void {
    this.contactoServicio.eliminar(contacto).subscribe();
    this.contactos = this.contactos.pipe(
      map((contactos: any[]) => contactos.filter((c: Contacto) => c !== contacto)))
    this.modal.dismissAll();
  }

  abrirModal(contenido: any, contacto:Contacto){
    this.contactoSeleccionado = contacto
    this.modal.open(contenido, { centered: true})
  }
}
