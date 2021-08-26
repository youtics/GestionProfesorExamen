import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesorCrearComponent } from './components/profesor-crear/profesor-crear.component';
import { ProfesorListarComponent } from './components/profesor-listar/profesor-listar.component';
import { ProfesorEliminarComponent } from './components/profesor-eliminar/profesor-eliminar.component';
import { ProfesorModificarComponent } from './components/profesor-modificar/profesor-modificar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorCrearComponent,
    ProfesorListarComponent,
    ProfesorEliminarComponent,
    ProfesorModificarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
