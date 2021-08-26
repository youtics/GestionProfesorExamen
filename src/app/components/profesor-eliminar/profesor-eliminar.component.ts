import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';

@Component({
  selector: 'app-profesor-eliminar',
  templateUrl: './profesor-eliminar.component.html',
  styleUrls: ['./profesor-eliminar.component.css']
})
export class ProfesorEliminarComponent implements OnInit {

  lista:Profesor[] = [];
  form: FormGroup;

  constructor(public data: DataService, private fb: FormBuilder) {
    this.form = this.fb.group({
      legajo:['', [Validators.required]],
      apellido:['', Validators.required]
    }) 
    this.lista = this.data.listaDeServicio;
  }

  ngOnInit(): void {
  }

  buscarElemento(aBuscarLegajo: any):number
  {
    var i=0;
    var flag=0;
    var pos=-1;
    for(i=0;  i<this.lista.length  && flag==0 ;i++)
    {
      if(this.lista[i].Legajo.toString() === aBuscarLegajo)
      {
        flag=1;
        pos=i;
      }
    }
    return pos;
  }
  eliminarElemento(desde:number)
  {
    this.lista.splice(desde,1);
  }

  controladorEliminar()
  {
    var posicion = this.buscarElemento(this.form.get('legajo')?.value);
    if(posicion!=-1)
      this.eliminarElemento(posicion);
  }


}
