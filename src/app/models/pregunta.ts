import { Respuesta } from './respuesta';
export class Pregunta
{
    idPregunta:number;
    idCuestionario: number;
    descripcionPregunta:string;
    respuestas: Respuesta[];
    //puntos: number;

    constructor(desc:string, resp:Respuesta[], id:number, idCuestionario: number)
    {
        this.descripcionPregunta=desc;
        this.respuestas = resp;
        this.idPregunta=id;
        this.idCuestionario=idCuestionario;
    }

}