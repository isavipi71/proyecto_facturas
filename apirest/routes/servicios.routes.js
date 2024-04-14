const express = require('express');
const router = express.Router();
const conexion = require('../routes/conexion.js');


// Ruta para guardar un servicio
router.post('/crearServicios', async (req, res) => {
    try {
        // Obtener los datos del servicio desde el body de la solicitud
        const data = 
         { 
            nombre, precio, descripcion, infoAdicional  
        } = req.body;
        const query = `INSERT INTO Servicios (nombre, precio, descripcion, info_adicional) VALUES ('${nombre}', ${precio}, '${descripcion}', '${infoAdicional}')`;
        // Ejecutar la consulta
         conexion.query(query, (error, result) => {
            // Responder al cliente con un mensaje de éxito
            if (error) {
                return res.status(400).json({
                    status: 400,
                    mensaje: 'Error al crear el servicio',
                });
            }else
            res.status(200).json({
                status: 200,
                mensaje: 'Servicio creado correctamente'
            });
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            mensaje: 'Error en el servidor',
            error: error
        });
    }
});

module.exports = router;
