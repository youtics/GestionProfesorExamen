import { Profesor } from './../models/profesor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listaDeServicio: Profesor[] = [];

  constructor() { }
}
