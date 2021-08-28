import { Respuesta } from './../models/respuesta';
import { Pregunta } from './../models/pregunta';
import { Profesor } from './../models/profesor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listaDeServicio: Profesor[] = [
    {Legajo:1, Apellido:'Chaldu', Nombre:'Gabriel', Sexo: 'Masculino', Materia:'Programacion I'}
  ];
  listaDePreguntas:Pregunta[]=[
    {idPregunta:1, descripcionPregunta:'Como te llamas?', respuestas:[new Respuesta('Gabriel',true,1),new Respuesta('Alejandro', false,1)]},
    {idPregunta:2, descripcionPregunta:'Donde vives', respuestas:[new Respuesta('en Mar del Plata',true,2),new Respuesta('en Italia', false,2)]}
  ];

  constructor() { }
}
