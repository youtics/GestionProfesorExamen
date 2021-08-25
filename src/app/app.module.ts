import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesorCrearComponent } from './components/profesor-crear/profesor-crear.component';
import { ProfesorListarComponent } from './components/profesor-listar/profesor-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorCrearComponent,
    ProfesorListarComponent
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
