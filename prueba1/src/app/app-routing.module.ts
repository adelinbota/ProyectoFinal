import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { TableroComponent } from './tablero/tablero.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'tablero', component: TableroComponent },
  { path: '', redirectTo: '/tablero', pathMatch: 'full'},
  { path: 'detalles/:id', component: DetallesComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
