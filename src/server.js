const express = require('express');
const morgan = require('morgan');
const path = require('path'); //Une rutas de directorios de manera compatible con windows y UNIX
const exphbs = require('express-handlebars')

const { mongoose } = require('./database'); //Cuando se colocan las llaves, se esta requiriendo solo el modulo

const app = express();

//Settings
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, '/views'));


//Middlewares - funciones que se ejecutan antes que lleguen a las rutas
app.use(morgan('dev'));
app.use(express.json()); //comprueba si es un formato json

//Routes - urls
app.use('/api/tasks', require('./routes/tasks.js')); //La primera parte es la ruta
app.use('/api/users', require('./routes/users.js'));


//Static files
app.use(express.static(path.join(__dirname, 'public')));




//Starting server
app.listen(app.get('port'), function onStart(err) {
    if (err) { //Si hay un error
        console.log(err)
    } else {
        console.log("Working ${app.get('port')}")
    }
});