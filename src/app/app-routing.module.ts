import { ProfesorListarComponent } from './components/profesor-listar/profesor-listar.component';
import { ProfesorCrearComponent } from './components/profesor-crear/profesor-crear.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'add-teacher', pathMatch: 'full'},
  {path: 'add-teacher', component: ProfesorCrearComponent},
  {path: 'profesor-listar', component: ProfesorListarComponent},
  {path: '**', redirectTo: 'add-teacher', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
