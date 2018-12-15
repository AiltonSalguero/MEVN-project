const express = require('express');
const router = express.Router();

const UserSignUp = require('../models/UserSignUp');

//Acciones en la base de datos
router.get('/', async(req, res) => { //Se usa async cuando una consulta puede tomar algo de tiempo
    const userID = await UserSignUp.find(); //Con await se declara dicha consulta
    console.log(userID);
    res.json(userID); //.find busca todos los documentos que tenemos en mongodb 

}); //.get Obtiene los datos de la base de datos


// router.post('/', async(req, res) => {
//     const userID = new UserSignUp(req.body); //Datos que el cliente envia
//     await userID.save(); //Almacena en la base de datos
//     res.json({
//         status: 'Tarea guardada'
//     });
// });

router.put('/:id', async(req, res) => {
    await UserSignUp.findByIdAndUpdate(req.params.id, req.body); //Id, datos actuales
    res.json({ status: 'Tarea actualizada' })
});


module.exports = router;