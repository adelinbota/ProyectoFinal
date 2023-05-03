import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { LoginComponent } from './login/login.component';
import { VerProductosComponent } from './componentes_crud/ver-productos/ver-productos.component';
import { AnadirProductoComponent } from './componentes_crud/anadir-producto/anadir-producto.component';
import { ActualizarProductoComponent } from './componentes_crud/actualizar-producto/actualizar-producto.component';
import { CitasComponent } from './citas/citas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const rutas: Routes = [
  {path: '', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'citas', component: CitasComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'clientes', component: UsuariosComponent},
  {path: 'productos', component: VerProductosComponent},
  {path: 'productos/add-productos', component: AnadirProductoComponent},
  {path: 'productos/actualizar-productos/:idProducto', component: ActualizarProductoComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorPaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
