const mysql = require('mysql')

const config = {
	host: 'wm1705.com',    
	user: 'c21_wm1705',
	password: 'I5XTMpsXfsy3Cb',
	database:'c21_wm1705'
};

const conexion = mysql.createConnection(config);
conexion.connect((error)=>{
	if (error) console.log('No se puedo conectar a la BD debido al error: ' + error);
	else console.log('Conexión realizada con éxito');
})

module.exports = conexion;