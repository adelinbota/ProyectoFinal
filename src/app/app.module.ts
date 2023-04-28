import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MatTableModule } from '@angular/material/table';
// import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { LoginComponent } from './login/login.component';
import { VerProductosComponent } from './componentes_crud/ver-productos/ver-productos.component';
import { AnadirProductoComponent } from './componentes_crud/anadir-producto/anadir-producto.component';
import { ActualizarProductoComponent } from './componentes_crud/actualizar-producto/actualizar-producto.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CitasComponent } from './citas/citas.component';

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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
