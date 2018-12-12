const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

//Acciones en la base de datos
router.get('/', async(req, res) => { //Se usa async cuando una consulta puede tomar algo de tiempo
    const tasks = await Task.find(); //Con await se declara dicha consulta
    console.log(tasks);
    res.json(tasks); //.find busca todos los documentos que tenemos en mongodb 

}); //.get Obtiene los datos de la base de datos

router.get('/:id', async(req, res) => {
    const tarea = await Task.findById(req.params.id);
    res.json(tarea);
}); //.get Obtiene los datos de la base de datos


router.post('/', async(req, res) => {
    const task = new Task(req.body); //Datos que el cliente envia
    await task.save(); //Almacena en la base de datos
    res.json({
        status: 'Tarea guardada'
    });
}); //.post Crea un nuevo dato

router.put('/:id', async(req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body); //Id, datos actuales
    res.json({ status: 'Tarea actualizada' })

}); //.put actualiza los datos

router.delete('/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ status: 'Tarea eliminada' });
}); //.delete Borra de la base de datos


module.exports = router;