const express = require('express');
const router = express.Router();

// Middleware para parsear el body de las peticiones
router.use(express.json());

// Obtener todos los clientes
router.get('/clientes', (req, res) => {
    // Lógica para obtener todos los clientes de la base de datos
    res.send('Obtener todos los clientes');
});

// Obtener un cliente por su ID
router.get('/clientes/:id', (req, res) => {
    const clientId = req.params.id;
    // Lógica para obtener un cliente por su ID de la base de datos
    res.send(`Obtener cliente con ID ${clientId}`);
});

// Crear un nuevo cliente
router.post('/clientes', (req, res) => {
    const newClientData = req.body;
    // Lógica para crear un nuevo cliente en la base de datos usando los datos del body
    res.send('Crear un nuevo cliente');
});

// Actualizar un cliente existente
router.put('/clientes/:id', (req, res) => {
    const clientId = req.params.id;
    const updatedClientData = req.body;
    // Lógica para actualizar un cliente existente en la base de datos usando los datos del body y el ID proporcionado
    res.send(`Actualizar cliente con ID ${clientId}`);
});

// Eliminar un cliente existente
router.delete('/clientes/:id', (req, res) => {
    const clientId = req.params.id;
    // Lógica para eliminar un cliente existente de la base de datos usando el ID proporcionado
    res.send(`Eliminar cliente con ID ${clientId}`);
});

module.exports = router;
