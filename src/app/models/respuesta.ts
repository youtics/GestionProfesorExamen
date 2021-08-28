export class Respuesta
{
    idPregunta:number;
    descripcionRespuesta:string;
    esCorrecta:boolean;
    constructor(nombre:string, esCorrecta:boolean, id:number) {
        this.descripcionRespuesta=nombre;
        this.esCorrecta = esCorrecta;
        this.idPregunta = id;
    }
}