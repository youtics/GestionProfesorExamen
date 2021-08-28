import { PreguntaCrearComponent } from './components/pregunta-crear/pregunta-crear.component';
import { HomeComponent } from './components/home/home.component';
import { ProfesorEliminarComponent } from './components/profesor-eliminar/profesor-eliminar.component';
import { ProfesorListarComponent } from './components/profesor-listar/profesor-listar.component';
import { ProfesorCrearComponent } from './components/profesor-crear/profesor-crear.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesorModificarComponent } from './components/profesor-modificar/profesor-modificar.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add-teacher', component: ProfesorCrearComponent},
  {path: 'profesor-listar', component: ProfesorListarComponent},
  {path: 'profesor-delete', component: ProfesorEliminarComponent},
  {path: 'profesor-update', component: ProfesorModificarComponent},
  {path: 'pregunta-crear', component: PreguntaCrearComponent},
  {path: '**', redirectTo: 'add-teacher', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
