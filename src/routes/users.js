const express = require('express');
const router = express.Router();

const User = require('../models/User');

//Acciones en la base de datos
router.get('/', async(req, res) => { //Se usa async cuando una consulta puede tomar algo de tiempo
    // const users = await User.find(); //Con await se declara dicha consulta
    // res.json(users.map(user => ({
    //     _id: user._id,
    //     firstname: user.firstname
    // }))); //.find busca todos los documentos que tenemos en mongodb 

    const users = await User.find(); //Con await se declara dicha consulta
    console.log(users);
    res.json(users); //.find busca todos los documentos que tenemos en mongodb 

}); //.get Obtiene los datos de la base de datos

router.get('/:id', async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(tarea);
}); //.get Obtiene los datos por id de la base de datos


router.post('/', async(req, res) => {
    const user = new User(req.body); //Datos que el cliente envia
    await user.save(); //Almacena en la base de datos
    res.json({
        status: 'Tarea guardada'
    });
}); //.post Crea un nuevo dato

router.put('/:id', async(req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body); //Id, datos actuales
    res.json({ status: 'Tarea actualizada' })

}); //.put actualiza los datos

router.delete('/:id', async(req, res) => {
    await USer.findByIdAndDelete(req.params.id);
    res.json({ status: 'Usuario Eliminado' });
}); //.delete Borra de la base de datos


module.exports = router;