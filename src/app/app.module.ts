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
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**ANGULAR MATERIAL */
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PreguntaCrearComponent } from './components/pregunta-crear/pregunta-crear.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ProfesorCrearComponent,
    ProfesorListarComponent,
    ProfesorEliminarComponent,
    ProfesorModificarComponent,
    NavbarComponent,
    HomeComponent,
    MainNavComponent,
    PreguntaCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
