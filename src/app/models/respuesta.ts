export class Respuesta
{
    idPregunta:number;
    idRespuesta: number;
    descripcionRespuesta:string;
    esCorrecta:boolean;
    constructor(nombre:string, esCorrecta:boolean, id:number, idres: number) {
        this.descripcionRespuesta=nombre;
        this.esCorrecta = esCorrecta;
        this.idPregunta = id;
        this.idRespuesta = idres;
    }
}