const express = require('express');
var router = express.Router();

const modelo = require('../modelos/modeloRecetas');


router.get('/receta', (req, res)=>{
	res.render('nuevaReceta')
});

router.post('/nuevaReceta', (req,res)=>{
	
	/* console.log(req);
	console.log("----------------------")
	console.log(req.body) No son necesarios, simplemente se utilizan para "ver en consola" el "comportamiento" */
	
	/* let receta ={
		nombre:req.body.nombre,
		desc:req.body.descripcion,
	} Otra manera de "ejecutar" el post*/

	modelo.nuevaReceta(req,(error, resultado)=> res.redirect('/receta'));
});    // --OJO IMPORTANTE: el tema del modelo.nuevaReceta(req) ¿comprobar en solución definitiva y preguntar dudas?

router.get('/consultaReceta/:id', (req, res)=>{
	modelo.consultaReceta(req.params.id, (error, resultado)=>res.render('recetario', {registros:resultado}));
})

module.exports = router;