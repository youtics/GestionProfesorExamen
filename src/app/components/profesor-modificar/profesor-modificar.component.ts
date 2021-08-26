import { DataService } from './../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profesor } from './../../models/profesor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesor-modificar',
  templateUrl: './profesor-modificar.component.html',
  styleUrls: ['./profesor-modificar.component.css']
})
export class ProfesorModificarComponent implements OnInit {

  listaModificar: Profesor[] = []
  form: FormGroup;
  constructor(private fb: FormBuilder, public dataService: DataService) { 
    this.form = this.fb.group(
      {
        legajo:['', [Validators.required]],
        apellido:['', Validators.required],
        nombre:['',Validators.required],
        sexo: ['', Validators.required],
        materia:['', Validators.required]
      }
    )
    this.listaModificar = this.dataService.listaDeServicio;
  }

  ngOnInit(): void {
  }
  buscarElemento(aBuscarLegajo: any):Profesor
  {
    var i=0;
    var flag=0;
    var pos=-1;
    for(i=0;  i<this.listaModificar.length  && flag==0 ;i++)
    {
      if(this.listaModificar[i].Legajo.toString() === aBuscarLegajo)
      {
        flag=1;
        pos=i;
      }
    }
    return this.listaModificar[pos];
  }
  completarBusqueda():void
  {
    var prof: Profesor =  this.buscarElemento(this.form.get('legajo')?.value)
    this.form.patchValue(
      {
        legajo: prof.Legajo,
        apellido: prof.Apellido,
        nombre: prof.Nombre,
        sexo: prof.Sexo,
        materia: prof.Materia
      }
    ); 
  }
  buscarElementoPos(aBuscarLegajo: any):number
  {
    var i=0;
    var flag=0;
    var pos=-10;
    for(i=0;  i<this.listaModificar.length  && flag==0 ;i++)
    {
      console.log("Legajo: " + this.listaModificar[i].Legajo);
      if(this.listaModificar[i].Legajo === aBuscarLegajo)
      {
        flag=1;
        pos=i;
      }
    }
    return pos;
  }
  modificar()
  {
    const emp:Profesor = {
      Nombre: this.form.get('nombre')?.value,
      Apellido: this.form.get('apellido')?.value,
      Legajo: this.form.get('legajo')?.value,
      Materia: this.form.get('materia')?.value,
      Sexo: this.form.get('sexo')?.value
    }
    var pos = this.buscarElementoPos(emp.Legajo);
    this.listaModificar.splice(pos, 1, emp);
  }

}
