const express = require('express');
const router = express.Router();

const UserSignUp = require('../models/UserSignUp');

//Acciones en la base de datos
router.get('/', async(req, res) => { //Se usa async cuando una consulta puede tomar algo de tiempo
    const userID = await UserSignUp.find(); //Con await se declara dicha consulta
    console.log(userID) ID;
    res.json(userID); //.find busca todos los documentos que tenemos en mongodb 

}); //.get Obtiene los datos de la base de datos


router.post('/', async(req, res) => {
    const userID = new UserSignUp(req.body); //Datos que el cliente envia
    await useIDr.save(); //Almacena en la base de datos
}); //.post Crea un nuevo dato


module.exports = router;