import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { LoginComponent } from './login/login.component';
import { VerProductosComponent } from './crud_productos/ver-productos/ver-productos.component';
import { AnadirProductoComponent } from './crud_productos/anadir-producto/anadir-producto.component';
import { ActualizarProductoComponent } from './crud_productos/actualizar-producto/actualizar-producto.component';
import { ServiciosComponent } from './crud_servicios/servicios/servicios.component';
import { CitasComponent } from './citas/citas.component';
import { UsuariosComponent } from './crud_usuarios/usuarios/usuarios.component';
import { AddUsuariosComponent } from './crud_usuarios/add-usuarios/add-usuarios.component';
import { ActualizarUsuariosComponent } from './crud_usuarios/actualizar-usuarios/actualizar-usuarios.component';
import { RegistroComponent } from './crud_usuarios/registro/registro.component';
import { AddServiciosComponent } from './crud_servicios/add-servicios/add-servicios.component';
import { ActualizarServiciosComponent } from './crud_servicios/actualizar-servicios/actualizar-servicios.component';
import { FooterComponent } from './footer/footer.component';
import { NewCitaComponent } from './citas/new-cita/new-cita.component';
import { AddCitaComponent } from './citas/add-cita/add-cita.component';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    InicioComponent,
    ErrorPaginaComponent,
    LoginComponent,
    VerProductosComponent,
    AnadirProductoComponent,
    ActualizarProductoComponent,
    ServiciosComponent,
    CitasComponent,
    UsuariosComponent,
    AddUsuariosComponent,
    ActualizarUsuariosComponent,
    RegistroComponent,
    AddServiciosComponent,
    ActualizarServiciosComponent,
    FooterComponent,
    NewCitaComponent,
    AddCitaComponent,
    CalendarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
