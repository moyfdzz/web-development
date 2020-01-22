let express = require('express');
let morgan = require('morgan');

let app = express();
app.use(morgan('dev'));

let estudiantes = [{
    nombre : "Miguel",
    apellido : "Ángeles",
    matricula : 1730939
},
{
    nombre : "Erick",
    apellido : "González",
    matricula : 1039859
}, 
{
    nombre : "Victor",
    apellido : "Villareal",
    matricula : 1039863
},
{
    nombre : "Carlos",
    apellido : "Estrada",
    matricula : 1039919
},
{
    nombre : "Francisco",
    apellido : "Sánchez",
    matricula : 1196903
},
{
    nombre : "Victor",
    apellido : "Cárdenas",
    matricula : 816350
}];

app.get('/api/getById', (req, res) => {
    let id = req.query.id;

    let result = estudiantes.find((elemento) => {
        if (elemento.matricula == id) {
            return elemento;
        }
    });

    if (result) {
        return res.status(200).json(result);
    }
    else {
        res.statusMessage = "El alumno no se encuentra en la lista.";
        return res.status(404).send();
    }
});

// http://localhost:8080/api/getById?id=1039919

app.get('/api/getByName/:name', (req, res) => {
    let name = req.params.name;

    let result = estudiantes.filter((elemento) => {
        if (elemento.nombre === name) {
            return elemento;
        }
    });

    if (result.length > 0) {
        return res.status(200).json(result);
    }
    else {
        res.statusMessage = "El alumno no se encuentra en la lista.";
        return res.status(404).send();
    }
});

// http://localhost:8080/api/getByName/Victor

// app.get('/api/students', (req, res) => {
//     console.log(req);
//     res.status(200).json(estudiantes);
// });

app.listen(8080, () => {
    console.log("Servidor corriendo en puerto 8080.");
});