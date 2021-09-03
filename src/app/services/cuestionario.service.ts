import { Cuestionario } from './../models/cuestionario';
import { Respuesta } from './../models/respuesta';
import { DataService } from 'src/app/services/data.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { dbPregunta } from '../models/dbPregunta';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  constructor(public firebase: AngularFirestore, public data: DataService) 
  { 
  }

  guardarPregunta(pregunta: dbPregunta): Promise<any>
  {
    return this.firebase.collection('Pregunta').add(pregunta);
  }
  guardarModeloCuestionario(cuestionario: Cuestionario): Promise<any>
  {
    return this.firebase.collection('Cuestionario').add(cuestionario);
  }
  guardarRespuesta(respuesta: Respuesta):Promise<any>
  {
    return this.firebase.collection('Respuesta').add(respuesta);
  }
 
}
