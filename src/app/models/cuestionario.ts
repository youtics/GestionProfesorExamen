import { Profesor } from './profesor';
import { Pregunta } from './pregunta';

export class Cuestionario{
    idCuestionario?: number;
    profesor?: string;
    //profesor: Profesor;

    constructor(id?: number, profesor?:string)
    {
        this.profesor = profesor;
        this.idCuestionario = id;
    }
}