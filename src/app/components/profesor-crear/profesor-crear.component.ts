import { DataService } from './../../services/data.service';
import { Profesor } from './../../models/profesor';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-profesor-crear',
  templateUrl: './profesor-crear.component.html',
  styleUrls: ['./profesor-crear.component.css']
})
export class ProfesorCrearComponent implements OnInit {

  form:FormGroup;

  listaDeProfesores: Profesor[] = [];

  constructor(private formBuilder:FormBuilder, public data: DataService) { 
    this.form = this.formBuilder.group({
      legajo:['', [Validators.required]],
      apellido:['', [Validators.pattern(/^[a-z ñ 'A-ZÑáéíóúÁÉÍÓÚ]+$/), Validators.required]],
      nombre:['',[Validators.pattern(/^[a-z ñ 'A-ZÑáéíóúÁÉÍÓÚ]+$/), Validators.required]],
      sexo: ['', Validators.required],
      materia:['', [Validators.pattern(/^[a-z ñ 'A-ZÑ0-9áéíóúÁÉÍÓÚ]+$/), Validators.required]]
    })
    this.listaDeProfesores=this.data.listaDeServicio;
  }
  
  ngOnInit(): void {
  }

  //METDOS

  agregarProfesoralArray()
  {
    const profesor:Profesor = {
      Nombre: this.form.get('nombre')?.value,
      Apellido: this.form.get('apellido')?.value,
      Legajo: this.form.get('legajo')?.value,
      Materia: this.form.get('materia')?.value,
      Sexo: this.form.get('sexo')?.value
    }    
    this.listaDeProfesores.push(profesor);
    this.data.listaDeServicio = this.listaDeProfesores;
    this.Limpiar();
  }
  Limpiar()
  {
    this.form.patchValue(
      {
        legajo: '',
        apellido: '',
        nombre: '',
        sexo: '',
        materia: ''
      }
    );
  }

}
