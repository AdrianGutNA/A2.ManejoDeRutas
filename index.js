const express = require('express');
const alumnos = require('./alumnos');

const parser = require('body-parser');

var app = express();

app.use(parser.json());

app.listen(3001, () => {
    console.log('Aplicación Iniciada');
});

app.get('/', (req, res) => {
    res.send({
        data: 'Servidor de Express - Raiz - Adrián Gutiérrez'
    });
});

app.get("/alumnos", (req, res) => {
    res.json(alumnos.listaAlumnos());
});

app.post("/alumnos", (req, res) => {

    var { matricula, nombre, apellidoPaterno, apellidoMaterno, edad } = req.body;

    alumnos.crear(matricula, nombre, apellidoPaterno, apellidoMaterno, edad);

    res.send("Se agregó a: " + nombre + " " + apellidoPaterno + " " + apellidoMaterno);
});

app.put('/alumnos/:id', (req, res) => {

    var { matricula, nombre, apellidoPaterno, apellidoMaterno, edad } = req.body;

    alumnos.editar(req.params.id, matricula, nombre, apellidoPaterno, apellidoMaterno, edad);

    res.send("Se editó a: " + nombre + " " + apellidoPaterno + " " + apellidoMaterno);

})

app.delete('/alumnos/:id', (req, res) => {

    alumnos.eliminar(req.params.id);

    res.send("Se eliminó al alumno: " + req.params.id);
})