const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000; 
const api = express();
const  conexionMysql = require('../apirest/routes/conexion.js');



// Middleware
api.use(cors());
api.use(express.json());

// Importar las rutas
const clientesRoutes = require('./routes/clientes.routes');
const facturasRoutes = require('./routes/facturas.routes');
const serviciosRoutes = require('./routes/servicios.routes');

// Rutas
api.use('/api/v1/clientes', clientesRoutes);
api.use('/api/v1/servicios', serviciosRoutes);
api.use('/api/v1/facturas', facturasRoutes);

// go to: http://localhost:4000/api-docs/ for api documentation
require("./swagger/swagger.config.js")(api);

// arrancar server
api.listen(port, () => {
  console.log(`Servidor arrancado y escuchando por el puerto: ${port}`); 
});





