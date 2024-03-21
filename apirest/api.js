const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000; 
const api = express();


// configuracion de la api
api.use(cors());
api.use(express.json());
api.use("/api/v1", require('./routes/app.routes.js'));
// go to: http://localhost:3000/api-docs/ for api documentation

require("./swagger/swagger.config.js")(api);



// arrancar server
api.listen(port, () => {
  console.log(`Servidor arrancado y escuchando por el puerto: ${port}`); 
});





//configuracion swagger

// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

// // // importar routes:
// api.use("/api", require("./routes/app.routes.js"));
// const swaggerDefinition = require("swagger.routes.js");
// // Configuracion Swagger
// const swaggerSpec = swaggerJsdoc(options);
// const options = {
//   swaggerDefinition,
//   apis: ["./routes/*.js"],
// };






