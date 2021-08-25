export class Profesor{
    Legajo:number;
    Apellido:string;
    Nombre:string;
    Materia:string;
    Sexo:string;

    constructor(legajo:number, apellido:string, nombre:string, materia:string, sexo:string)
    {
        this.Legajo = legajo;
        this.Apellido = apellido;
        this.Nombre = nombre;
        this.Materia = materia;
        this.Sexo = sexo;
    }
}