import { Respuesta } from './respuesta';
export class Pregunta
{
    idPregunta:number;
    descripcionPregunta:string;
    respuestas: Respuesta[];

    constructor(desc:string, resp:Respuesta[], id:number)
    {
        this.descripcionPregunta=desc;
        this.respuestas = resp;
        this.idPregunta=id;
    }

}