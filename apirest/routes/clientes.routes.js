const express = require('express');
const router = express.Router();
const cors = require("cors");
const conexionMysql = require("./conexion");

// Middleware para parsear el body de las peticiones
router.use(express.json());
router.use(cors());



// Crear un nuevo cliente
router.post('/', async (req, res) => {
    try {
        const cliente = req.body;

        // Query para insertar un nuevo cliente en la base de datos
        const query = `
            INSERT INTO clientes 
            (Nombre, NIF, Dirección, Provincia, Ciudad, \`Código Postal\`, País, Teléfono, Movil, \`Correo electrónico\`) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        // Ejecutar la consulta SQL
        conexionMysql.query(
            query,
            [
                cliente.nombre,
                cliente.nif,
                cliente.calle,
                cliente.provincia,
                cliente.ciudad,
                cliente.codigoPostal,
                cliente.pais,
                cliente.telefono,
                cliente.movil,
                cliente.correoElectronico
            ],
            (error, result) => {
                if (error) {
                    // Manejar el error en caso de que ocurra
                    handleError(res, error, "Error al insertar el cliente");
                } else {
                    // Enviar una respuesta JSON indicando que el cliente se ha insertado correctamente
                    res.json({
                        mensaje: "Cliente insertado correctamente",
                        idClienteInsertado: result.insertId
                    });
                }
            }
        );
    } catch (error) {
        // Manejar el error en caso de que ocurra
        handleError(res, error, "Error al insertar el cliente");
    }
});

// Función para manejar los errores
function handleError(res, error, mensaje) {
    console.error(mensaje, error);
    res.status(500).json({ error: mensaje });
}



// Obtener todos los clientes
// router.get('/clientes', (req, res) => {
//     // Lógica para obtener todos los clientes de la base de datos
    
// });

// Obtener un cliente por su ID
// router.get('/clientes/:id', (req, res) => {
//     const clientId = req.params.id;
   
//     ;

// });


// Actualizar un cliente existente
// router.put('/clientes/:id', (req, res) => {
//     const clientId = req.params.id;
//     const updatedClientData = req.body;
    
    
// });

// Eliminar un cliente existente
// router.delete('/clientes/:id', (req, res) => {
//     const clientId = req.params.id;
   
    
// });

module.exports = router;
