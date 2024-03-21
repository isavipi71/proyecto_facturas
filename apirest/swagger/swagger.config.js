
const swaggerDefinition = require('./swaggerDefinition.js');
    module.exports = (api) => {
      const swaggerUi = require('swagger-ui-express');
    api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
  // Documentation in JSON format
  api.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDefinition);
  });   
};