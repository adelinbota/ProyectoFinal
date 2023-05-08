import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TiposUsuario } from '../tiposUsuario';

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

    this.usuarioServicio.obtenerTiposUsuario().subscribe(
      (tipoUsuario: TiposUsuario[]) => {
        this.tipoUsuario = tipoUsuario
      }
    )
  }

  usuario = new Usuario(1,"","","","","","","","",1);
  tipoUsuario:TiposUsuario[];

  actualizar(){
    this.usuarioServicio.actualizarUsuario(this.usuario).subscribe();
    this.router.navigate(['/usuarios']);
  }
}
