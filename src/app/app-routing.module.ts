import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { LoginComponent } from './login/login.component';
import { VerProductosComponent } from './componentes_crud/ver-productos/ver-productos.component';
import { AnadirProductoComponent } from './componentes_crud/anadir-producto/anadir-producto.component';
import { ActualizarProductoComponent } from './componentes_crud/actualizar-producto/actualizar-producto.component';
import { CitasComponent } from './citas/citas.component';
import { ServiciosComponent } from './servicios/servicios.component';

const rutas: Routes = [
  {path: '', component: InicioComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:categoria', component: ProductosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'citas', component: CitasComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'producto/:id', component: EditarProductoComponent},
  {path: 'cliente/:id', component: ClienteComponent},
  {path: 'lista-productos', component: VerProductosComponent},
  {path: 'add-productos', component: AnadirProductoComponent},
  {path: 'actualizar-productos/:idProducto', component: ActualizarProductoComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorPaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
