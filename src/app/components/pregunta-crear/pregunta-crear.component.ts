import { Respuesta } from './../../models/respuesta';
import { Pregunta } from './../../models/pregunta';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta-crear',
  templateUrl: './pregunta-crear.component.html',
  styleUrls: ['./pregunta-crear.component.css']
})
export class PreguntaCrearComponent implements OnInit {

  form:FormGroup;
  lista:Pregunta[]=[];
  constructor(private fb: FormBuilder, public data: DataService) { 
    this.form = this.fb.group({
      id:[, Validators.required],
      pregunta:['', Validators.required],
      idPregunta:['', Validators.required],
      respuesta:['', Validators.required],
      esCorrecta: ['', Validators.required]
    })
    this.lista = this.data.listaDePreguntas;
  }

  ngOnInit(): void {
  }

  recorrerMostrarLista()
  {
    var i:number=0;
    for(i=0;i<this.lista.length;i++)
    {

    }
  }
  agregarPregunta():Pregunta
  {
    const arregloRespuesta: any [] = [];
    const pregunta:Pregunta = {
      idPregunta: this.form.get('id')?.value,
      descripcionPregunta: this.form.get('pregunta')?.value,
      respuestas: arregloRespuesta
    }
    this.data.listaDePreguntas.push(pregunta);
    this.lista = this.data.listaDePreguntas;
    this.Limpiar();
    return pregunta;
  }
  agregarRespuesta()
  {
    const posicion = this.buscarPregunta(this.form.get('idPregunta')?.value);
    console.log("Id: " + posicion);
    const respuesta:Respuesta = {
      idPregunta: posicion,
      descripcionRespuesta: this.form.get('respuesta')?.value,
      esCorrecta: this.VoF()
    }
    this.data.listaDePreguntas[posicion].respuestas.push(respuesta);
    this.lista = this.data.listaDePreguntas;
  }

  VoF():boolean
  {
    console.log("Que:  " + this.form.get('esCorrecta')?.value);
    if(this.form.get('esCorrecta')?.value === 'Verdadero')
    {
      return true;
    }else{
      return false;
    }
  }

  mostrarArregloDePreguntas()
  {
    var i=0;
    var z=0;
    for(i=0; i<this.data.listaDePreguntas.length; i++)
    {
      console.log(this.data.listaDePreguntas[i].descripcionPregunta)
      for(z=0; z < this.data.listaDePreguntas[i].respuestas.length; z++)
      {
        console.log(this.data.listaDePreguntas[i].respuestas[z].descripcionRespuesta);
        console.log(this.data.listaDePreguntas[i].respuestas[z].esCorrecta);
      }
    }
  }

  buscarPregunta(id:any):number
  {
    var i=0;
    var pos:number=-1;
    var flag = 0;
    for(i=0; i<this.data.listaDePreguntas.length && flag == 0; i++)
    {
      if(this.data.listaDePreguntas[i].idPregunta.toString()===id)
      {
        pos=i;
      }
        
    }
    return pos;
  }
  
  Limpiar()
  {
    this.form.patchValue(
      {
        id: '',
        descripcion: '',
        idPregunta: '',
        respuesta: '',
        esCorrecta:''
      }
    );
  }

}
