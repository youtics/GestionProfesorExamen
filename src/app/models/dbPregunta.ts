export class dbPregunta{
    idPregunta:number;
    idCuestionario: number;
    descripcionPregunta:string;
    //puntos: number;

    constructor(desc:string, id:number, idCuestionario: number)
    {
        this.descripcionPregunta=desc;
        this.idPregunta=id;
        this.idCuestionario=idCuestionario;
    }
}