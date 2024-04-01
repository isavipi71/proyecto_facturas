const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000; 
const api = express();

// Middleware
api.use(cors());
api.use(express.json());

// Rutas
app.use('/api/v1/clientes', require('./routes/clientes.routes'));
app.use('/api/v1/facturas', require('./routes/facturas.routes'));

// go to: http://localhost:3000/api-docs/ for api documentation
require("./swagger/swagger.config.js")(api);

// arrancar server
api.listen(port, () => {
  console.log(`Servidor arrancado y escuchando por el puerto: ${port}`); 
});





