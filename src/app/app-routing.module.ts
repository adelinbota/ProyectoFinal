import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { LoginComponent } from './login/login.component';
import { VerProductosComponent } from './crud_productos/ver-productos/ver-productos.component';
import { AnadirProductoComponent } from './crud_productos/anadir-producto/anadir-producto.component';
import { ActualizarProductoComponent } from './crud_productos/actualizar-producto/actualizar-producto.component';
import { CitasComponent } from './citas/citas.component';
import { ServiciosComponent } from './crud_servicios/servicios/servicios.component';
import { UsuariosComponent } from './crud_usuarios/usuarios/usuarios.component';
import { AddUsuariosComponent } from './crud_usuarios/add-usuarios/add-usuarios.component';
import { ActualizarUsuariosComponent } from './crud_usuarios/actualizar-usuarios/actualizar-usuarios.component';
import { RegistroComponent } from './crud_usuarios/registro/registro.component';
import { AddServiciosComponent } from './crud_servicios/add-servicios/add-servicios.component';
import { ActualizarServiciosComponent } from './crud_servicios/actualizar-servicios/actualizar-servicios.component';
import { NewCitaComponent } from './citas/new-cita/new-cita.component';

const rutas: Routes = [
  {path: '', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'citas', component: CitasComponent},
  {path: 'citas/new', component: NewCitaComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'productos', component: VerProductosComponent},
  {path: 'productos/add-productos', component: AnadirProductoComponent},
  {path: 'productos/actualizar-productos/:idProducto', component: ActualizarProductoComponent},
  {path: 'usuarios/add-usuario', component: AddUsuariosComponent},
  {path: 'usuarios/actualizar-usuario/:idUsuario', component: ActualizarUsuariosComponent},
  {path: 'servicios/add-servicios', component: AddServiciosComponent},
  {path: 'servicios/actualizar-servicios/:idServicio', component: ActualizarServiciosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', component: ErrorPaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
