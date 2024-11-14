export default class Cl_Estudiante {
    constructor(nombre, semestre, nota) {
        this.nombre = nombre;
        this.semestre = semestre;
        this.nota = nota;
    }
    set nota(nota) {
        this._nota = +nota;
    }
    get nota() {
        return this._nota;
    }
    set semestre(semestre){
        this._semestre = +semestre;
    }
    get semestre(){
        return this._semestre;
    }
    set nombre(nombre){
        this._nombre = +nombre;
    }
    get nombre(){
        return this._nombre;
    }
}