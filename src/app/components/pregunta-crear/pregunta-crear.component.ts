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

  formPregunta:FormGroup;
  formRespuesta:FormGroup;
  lista:Pregunta[]=[];
  constructor(private fb: FormBuilder, public data: DataService) { 
    this.formPregunta = this.fb.group({
      id:[, Validators.required],
      pregunta:['', Validators.required],
    })
    this.formRespuesta = this.fb.group({
      idPregunta:['', Validators.required],
      respuesta:['', Validators.required],
      esCorrecta: ['', Validators.required]
    })
    this.lista = this.data.listaDePreguntas;
  }

  ngOnInit(): void {
    this.data.listaDePreguntas = this.lista;
  }

  agregarPregunta():Pregunta
  {
    const arregloRespuesta: any [] = [];
    const pregunta:Pregunta = {
      idPregunta: this.formPregunta.get('id')?.value,
      descripcionPregunta: this.formPregunta.get('pregunta')?.value,
      respuestas: arregloRespuesta
    }
    this.data.listaDePreguntas.push(pregunta);
    this.lista = this.data.listaDePreguntas;
    this.LimpiarPregunta();
    return pregunta;
  }
  agregarRespuesta()
  {
    const posicion = this.buscarPregunta(this.formRespuesta.get('idPregunta')?.value);
    console.log("Id: " + posicion);
    const respuesta:Respuesta = {
      idPregunta: posicion,
      descripcionRespuesta: this.formRespuesta.get('respuesta')?.value,
      esCorrecta: this.VoF()
    }
    this.lista[posicion].respuestas.push(respuesta);
    this.data.listaDePreguntas = this.lista;
    this.LimpiarRespuesta();
  }

  VoF():boolean
  {
    console.log("Que:  " + this.formRespuesta.get('esCorrecta')?.value);
    if(this.formRespuesta.get('esCorrecta')?.value === 'Verdadero')
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
  
  LimpiarPregunta()
  {
    this.formPregunta.patchValue(
      {
        id: '',
        pregunta: '',
      }
    );
    }
  LimpiarRespuesta()
  {
    this.formRespuesta.patchValue(
      {
        idPregunta: '',
        respuesta: '',
        esCorrecta:''
      }
    );
  }
  buscarRespuesta(array: Respuesta[], descripcionRespuesta: string):number
  {
    var i=0;
    var pos:number=-1;
    var flag = 0;
    for(i=0; i<array.length && flag == 0; i++)
    {
      if(array[i].descripcionRespuesta.toString()===descripcionRespuesta)
      {
        pos=i;
      }
        
    }
    return pos;
  }
  buscarPregunta2(id:any):number
  {
    var i=0;
    var pos:number=-1;
    var flag = 0;
    for(i=0; i<this.data.listaDePreguntas.length && flag == 0; i++)
    {
      if(this.data.listaDePreguntas[i].idPregunta===id)
      {
        pos=i;
      }
        
    }
    return pos;
  }
  eliminarRespuesta(array: Respuesta[], desc:string)
  {
    const posRespuesta = this.buscarRespuesta(array, desc);
    array.splice(posRespuesta,1);
    this.data.listaDePreguntas = this.lista;
  }

  eliminarPregunta(id: number)
  {
    const posPregunta = this.buscarPregunta2(id);
    console.log("pos de IdPregunta: "+ posPregunta);
    this.data.listaDePreguntas.splice(posPregunta,1);
    this.data.listaDePreguntas = this.lista;

  }


}
