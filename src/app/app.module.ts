import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { ClienteService } from './cliente.service';
import { ProductoService } from './producto.service';
import { DatosService } from './datos.service';
import { LoginComponent } from './login/login.component';
import { VerProductosComponent } from './componentes_crud/ver-productos/ver-productos.component';
import { AnadirProductoComponent } from './componentes_crud/anadir-producto/anadir-producto.component';
import { ActualizarProductoComponent } from './componentes_crud/actualizar-producto/actualizar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ProductosComponent,
    ContactoComponent,
    InicioComponent,
    EditarProductoComponent,
    ClienteComponent,
    ErrorPaginaComponent,
    LoginComponent,
    VerProductosComponent,
    AnadirProductoComponent,
    ActualizarProductoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ClienteService, ProductoService, DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
