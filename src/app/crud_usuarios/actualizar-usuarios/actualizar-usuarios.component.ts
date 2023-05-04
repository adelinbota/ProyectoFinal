import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuarios',
  templateUrl: './actualizar-usuarios.component.html',
  styleUrls: ['./actualizar-usuarios.component.css']
})
export class ActualizarUsuariosComponent implements OnInit{

  constructor(private usuarioServicio: UsuarioService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    let idUsuario = this.route.snapshot.paramMap.get('idUsuario');
    this.usuarioServicio.getUsuario(idUsuario).subscribe(
      (usuario: Usuario) => this.usuario = usuario
    )
  }

  usuario = new Usuario(1,"","","","","","","","",1);

  actualizar(){
    this.usuarioServicio.actualizarUsuario(this.usuario).subscribe();
    this.router.navigate(['/usuarios']);
  }
}
