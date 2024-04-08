const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000; 
const api = express();
// const fs = require('fs');
// const { jsPDF } = require('jspdf');

// Middleware
api.use(cors());
api.use(express.json());

// Importar las rutas
const clientesRoutes = require('./routes/clientes.routes');
const facturasRoutes = require('./routes/facturas.routes');

// Rutas
api.use('/api/v1/clientes', clientesRoutes);
api.use('/api/v1/facturas', facturasRoutes);

// go to: http://localhost:3000/api-docs/ for api documentation
require("./swagger/swagger.config.js")(api);

// arrancar server
api.listen(port, () => {
  console.log(`Servidor arrancado y escuchando por el puerto: ${port}`); 
});





