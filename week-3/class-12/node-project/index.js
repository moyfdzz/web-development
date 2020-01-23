let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
let app = express();

app.use(express.static('public'));
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

app.post('/api/newStudent', jsonParser, (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let matricula = req.body.matricula;

    if (nombre !== undefined && apellido !== undefined && matricula !== undefined) {
        let result = estudiantes.find(estudiante => estudiante.matricula === matricula);

        if (result === undefined) {
            let estudiante = {nombre, apellido, matricula};
            estudiantes.push(estudiante);
            res.statusMessage = `Estudiante ${nombre} ${apellido} con la matrícula ${matricula} ha sido agregado a la lista de estudiantes.`;
            return res.status(201).send();
        }
        else {
            res.statusMessage = "La mátricula ingresada ya existe.";
            return res.status(409).send();
        }
    }
    else {
        res.statusMessage = "Ingrese todos los elementos (nombre, apellido y matrícula).";
        return res.status(406).send();
    }
});

app.put('/api/updateStudent/:id', jsonParser, (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let matricula = req.body.matricula;

    if (matricula !== undefined && (nombre !== undefined || apellido !== undefined)) {
        
    }
    else {
        res.statusMessage("Ingrese una matrícula y un nombre o un apllido.");
        return res.status(406).send();
    }
});

app.listen(8080, () => {
    console.log("Servidor corriendo en puerto 8080.");
});