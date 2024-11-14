/*
ESTUDIANTE-A

Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los estudiantes de un semestre dado.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}

Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado.
*/

function estudiantesSemestre(estudiantes, semestre) { 
    return estudiantes.filter(estudiante => estudiante.semestre === semestre); 
}
let estudiantes = [
    { nombre: 'Pablito', semestre: 5, nota: 14 },
    { nombre: 'Pepito', semestre: 5, nota: 16 },
    { nombre: 'Pedrito', semestre: 3, nota: 12 },
    { nombre: 'Javier', semestre: 3, nota: 20 },
    { nombre: 'Jorge', semestre: 6, nota: 18 },
    { nombre: 'Kevin', semestre: 3, nota: 15 },
    { nombre: 'Ricardo', semestre: 2, nota: 10 },
];

let salida = document.getElementById('salida');

salida.innerHTML = "Estudiantes del semestre 5: " + estudiantesSemestre(estudiantes, 5).map(estudiante => estudiante.nombre).join(', ');
salida.innerHTML += "<br>Estudiantes del semestre 3: " + estudiantesSemestre(estudiantes, 3).map(estudiante => estudiante.nombre).join(', ');
salida.innerHTML += "<br>Estudiantes del semestre 6: " + estudiantesSemestre(estudiantes, 6).map(estudiante => estudiante.nombre).join(', ');
salida.innerHTML += "<br>Estudiantes del semestre 2: " + estudiantesSemestre(estudiantes, 2).map(estudiante => estudiante.nombre).join(', ');

