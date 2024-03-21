const mysql = require('mysql2');
const util = require("util"); 

 const conexionMysql = mysql.createConnection ({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'Appfacturas',
 });


conexionMysql.query = util.promisify(conexionMysql.query).bind(conexionMysql);

conexionMysql.connect(err => {
  if (err) {
    console.log('Error en la conexión MySQL:', err);
  }
  console.log('Base de datos MySQL conectada!');
});

module.exports = conexionMysql;



//railway
// // // // // // // // // const conexionmysql = mysql.createconnection({
// // // // // // // // //   host: 'roundhouse.proxy.rlwy.net',
// // // // // // // // //   user: 'root',
// // // // // // // // //   password: 'yybgncdzztfvvhgmskwklpccizkpwazr',
// // // // // // // // //   database: 'railway',
//   port: 58285
// // // });

// DEPLOY:
// promise wrapper to enable async await with MYSQL