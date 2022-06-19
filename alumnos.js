var alumnos = [
    { "id": 1, matricula: "11001", nombre: "Adrián", apellidoPaterno: "Gutiérrez", apellidoMaterno: "Nava", edad: 24 },
    { "id": 2, matricula: "11002", nombre: "María", apellidoPaterno: "Alejo", apellidoPaterno: "Ángeles", edad: 25 },
    { "id": 3, matricula: "11003", nombre: "Noel", apellidoPaterno: "perez", apellidoPaterno: "Torres", edad: 10 },
    { "id": 4, matricula: "11004", nombre: "Josué", apellidoPaterno: "Gutiérrez", apellidoPaterno: "Abundis", edad: 5 }
];

let siguienteId = alumnos.length + 1;

function listaAlumnos() {
    return alumnos;
};

function crear(matricula, nombre, apellidoPaterno, apellidoMaterno, edad) {

    const alumno = { id: siguienteId, matricula, nombre, apellidoPaterno, apellidoMaterno, edad };
    alumnos.push(alumno);
    siguienteId++;

    return alumno;
}

function editar(id, matricula, nombre, apellidoPaterno, apellidoMaterno, edad) {

    var idPosicion = id - 1;

    alumnos[idPosicion].matricula = matricula;
    alumnos[idPosicion].nombre = nombre;
    alumnos[idPosicion].apellidoPaterno = apellidoPaterno;
    alumnos[idPosicion].apellidoMaterno = apellidoMaterno;
    alumnos[idPosicion].edad = edad;
};

function eliminar(id) {
    var idPosicion = id - 1;

    alumnos.splice(idPosicion, 1)
}

module.exports = { listaAlumnos, crear, editar, eliminar }