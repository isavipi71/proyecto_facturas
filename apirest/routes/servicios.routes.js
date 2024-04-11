const express = require('express');

const router = express.Router();

// Ruta para guardar un servicio
router.post('/servicios', async (req, res) => {
    try {
        // Obtener los datos del servicio desde el body de la solicitud
        const { nombre, precio, descripcion, infoAdicional  } = req.body;

        // Realizar la petición al endpoint utilizando el fetch
        const response = await fetch('http://localhost:4000/api/v1/servicios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, descripcion, precio })
        });

        // Verificar el estado de la respuesta
        if (response.ok) {
            // El servicio se guardó correctamente
            res.status(200).json({ message: 'Servicio guardado correctamente' });
        } else {
            // Hubo un error al guardar el servicio
            res.status(500).json({ error: 'Error al guardar el servicio' });
        }
    } catch (error) {
        // Hubo un error en el servidor
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

module.exports = router;