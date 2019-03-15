const mysql = require('mysql');
const conexion = require('../conexion');

const nuevaReceta = (receta, callback)=>{
	/*console.log('Nueva Receta'); realizar este console.log no es necesario*/
	conexion.query('INSERT INTO recetas (nombre, descripcion, fecha_publicacion) VALUES("' + receta.body.nombre + '", "' + receta.body.descripcion+ '", "' + receta.body.fecha_publicacion+ '");', (error, resultado)=>{
		return callback(error, resultado);
	})
};

const consultaReceta = (id, callback)=>{
	conexion.query('SELECT * FROM recetas WHERE id_receta=?',id, (error, resultado)=>{
		return callback(error, resultado);
	})
};

module.exports = {nuevaReceta, consultaReceta};