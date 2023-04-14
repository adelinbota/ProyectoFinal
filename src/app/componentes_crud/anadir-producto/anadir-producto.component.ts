import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-anadir-producto',
  templateUrl: './anadir-producto.component.html',
  styleUrls: ['./anadir-producto.component.css']
})
export class AnadirProductoComponent {

  formulario:FormGroup;

  constructor(private formBuilder: FormBuilder, private router:Router){
    this.formulario=this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      precio: [''],
      imagen: ['']
    }
  )};

  addDatos(){
    console.log(this.formulario.value);
    this.router.navigate(['/lista-productos']);
  }
}
