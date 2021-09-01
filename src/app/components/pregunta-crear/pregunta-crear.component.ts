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
  idRespuestaActual: number=-1;
  idPreguntaActual: number=-1;
  constructor(private fb: FormBuilder, public data: DataService) { 
    this.formPregunta = this.fb.group({
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
      idPregunta: this.buscarElIdMasAlto()+1,
      descripcionPregunta: this.formPregunta.get('pregunta')?.value,
      respuestas: arregloRespuesta
    }
    this.data.listaDePreguntas.push(pregunta);
    this.lista = this.data.listaDePreguntas;
    this.LimpiarPregunta();
    return pregunta;
  }
  buscarElIdMasAlto():number
  {
    var i=0;
    var idMayor=0;
    for(i=0; i<this.data.listaDePreguntas.length; i++)
    {
      if(this.data.listaDePreguntas[i].idPregunta>idMayor)
      {
        idMayor = this.data.listaDePreguntas[i].idPregunta;
      }
    }
    return idMayor; 
  }
  retornarNuevoIdRespuesta(id: number)
  {
    var i=0;
    var idNuevo:number=-1;
    var flag = 0;
    for(i=0; i<this.data.listaDePreguntas.length && flag == 0; i++)
    {
      if(this.data.listaDePreguntas[i].idPregunta==id)
      {
        idNuevo = this.data.listaDePreguntas[i].respuestas.length + 1;
        flag=1;
      }
        
    }
    return idNuevo;
  }
  agregarRespuesta()
  {
    const posicion = this.buscarPregunta(this.formRespuesta.get('idPregunta')?.value);
    const respuesta:Respuesta = {
      idPregunta: this.formRespuesta.get('idPregunta')?.value,
      idRespuesta: this.retornarNuevoIdRespuesta(this.formRespuesta.get('idPregunta')?.value),
      descripcionRespuesta: this.formRespuesta.get('respuesta')?.value,
      esCorrecta: this.VoF()
    }
    console.log("IdRespuesta ", respuesta.idRespuesta);
    console.log("posicion" + posicion);
    this.data.listaDePreguntas[posicion].respuestas.push(respuesta);
    this.lista = this.data.listaDePreguntas;
    this.LimpiarRespuesta();
  }

  VoF():boolean
  {
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
      if(this.data.listaDePreguntas[i].idPregunta==id)
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
  buscarPregunta2(id:number):number
  {
    var i=0;
    var pos:number=-1;
    var flag = 0;
    for(i=0; i<this.data.listaDePreguntas.length && flag == 0; i++)
    {
      if(this.data.listaDePreguntas[i].idPregunta==id)
      {
        console.log("i para setear" + i);
        pos=i;
        flag=1;
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
    this.data.listaDePreguntas.splice(posPregunta,1);
    this.data.listaDePreguntas = this.lista;

  }

  buscarPregunta3(id:any):Pregunta
  {
    var i=0;
    var preg:any;
    var flag = 0;
    for(i=0; i<this.data.listaDePreguntas.length && flag == 0; i++)
    {
      if(this.data.listaDePreguntas[i].idPregunta===id)
      {
        preg = this.data.listaDePreguntas[i];
        flag=1;
      }
        
    }
    return preg;
  }
  completarBusquedaPregunta(id:number):void
  {
    var pregunta: Pregunta =  this.buscarPregunta3(id);
    this.formPregunta.patchValue(
      {
        pregunta: pregunta.descripcionPregunta,
      }
    );
    this.idPreguntaActual = pregunta.idPregunta;
  }
  buscarPregunta4(id:any):Respuesta[]
  {
    var i=0;
    var preg:any;
    var flag = 0;
    for(i=0; i<this.data.listaDePreguntas.length && flag === 0; i++)
    {
      if(this.data.listaDePreguntas[i].idPregunta===id)
      {
        preg = this.data.listaDePreguntas[i].respuestas;
        flag=1;
      }      
    }
    return preg;
  }
  buscarIdPregunta(desc:string):number
  {
    var i=0;
    var idPregunta:any;
    var flag = 0;
    for(i=0; i<this.data.listaDePreguntas.length && flag === 0; i++)
    {
      if(this.data.listaDePreguntas[i].descripcionPregunta===desc)
      {
        idPregunta = this.data.listaDePreguntas[i].idPregunta;
        flag=1;
      }      
    }
    return idPregunta;
  }
  modificarPregunta()
  {
    const preg:Pregunta = {
      idPregunta: this.idPreguntaActual,
      descripcionPregunta: this.formPregunta.get('pregunta')?.value,
      respuestas: this.buscarPregunta4(this.idPreguntaActual),
    }
    if(this.idPreguntaActual>=0)
    {
      var pos = this.buscarPregunta2(this.idPreguntaActual);
      this.data.listaDePreguntas.splice(pos, 1, preg);
    }
    
  }

  ModificarPosicionRespuesta(id:number, idres: number, res: Respuesta):void
  {
    var i=0;
    var z=0;
    var flag = 0;
    for(i=0; i<this.data.listaDePreguntas.length && flag == 0; i++)
    {
      for(z=0; z < this.data.listaDePreguntas[i].respuestas.length && flag == 0; z++)
      {
        console.log("id "+id);
        console.log("idres "+idres);
        if(this.data.listaDePreguntas[i].idPregunta == id && idres == this.data.listaDePreguntas[i].respuestas[z].idRespuesta)
        {
            this.data.listaDePreguntas[i].respuestas[z].descripcionRespuesta = res.descripcionRespuesta;
            this.data.listaDePreguntas[i].respuestas[z].idPregunta = res.idPregunta;
            this.data.listaDePreguntas[i].respuestas[z].esCorrecta = this.VoF();
            flag = 1;
           
        }
      }
    }
  }
  modificarRespuesta()
  {
    const res:Respuesta = {
      idPregunta: this.formRespuesta.get('idPregunta')?.value,
      idRespuesta:this.idRespuestaActual,
      descripcionRespuesta: this.formRespuesta.get('respuesta')?.value,
      esCorrecta: this.VoF()
    }
    if(this.idRespuestaActual >= 0)
    {
      this.ModificarPosicionRespuesta(res.idPregunta, res.idRespuesta, res);
      //this.data.listaDePreguntas[pos].respuestas.splice(pos, 1, res);
      this.lista = this.data.listaDePreguntas;
    }
    
  }
  buscarRespuesta2(lista: Respuesta[], id:any):Respuesta
  {
    var i=0;
    var res:any;
    var flag = 0;
    for(i=0; i<lista.length && flag === 0; i++)
    {
      if(lista[i].descripcionRespuesta===id)
      {
        res = lista[i];
        flag=1;
      }      
    }
    return res;
  }
  VoF2(valor:boolean):string
  {
    if(valor === true)
    {
      return 'Verdadero';
    }else{
      return 'Falso';
    }
  }

  completarBusquedaRespuesta(lista: Respuesta[], id:any):void
  {
    var respuesta: Respuesta =  this.buscarRespuesta2(lista, id);

    this.formRespuesta.patchValue(
      {
        idPregunta: respuesta.idPregunta,
        respuesta: respuesta.descripcionRespuesta,
        esCorrecta: this.VoF2(respuesta.esCorrecta)
      }
    );
    this.idRespuestaActual = respuesta.idRespuesta;
    console.log(this.idRespuestaActual);
  }
}