
const express = require('express');
const router = express.Router();
const cors = require("cors");
const mysql = require("mysql2");
const conexionMysql = require("./conexion");

// Middleware para parsear el body de las peticiones
router.use(express.json());
router.use(cors());

//Error handler
const handleError = (res, error, mensaje) => {
  console.error(error);
  res.status(500).json({
    status: 500,
    message: `${mensaje}. ${error}`,
  });
};

// Crear una nueva factura
router.post('/crear',  async (req, res) => {
  try {
    const factura = req.body;
    const query = "INSERT INTO facturas VALUES (default, ?, ?,?,?,?,?,?,?,?)";
    conexionMysql.query(query, [factura.clientes_id, factura.Fecha_factura, factura.Referencia_pago, factura.Fecha_vencimiento, factura.Servicio, factura.Cantidad, factura.Precio, factura.Impuesto,  factura.Total], (error, result) => {
      if (error) {
        handleError(res, error, "Error al insertar la factura");
      } else {
        res.json({
          "mensaje": "Dato insertado correctamente"
        })
      }
    });

  } catch (error) {
    handleError(res, error, "Error al insertar la factura");
  }
});

//leer las facturas

router.get("/saludo", async (req, res) => {
  try {
    res.status(200).json({ Saludo: "Bienvenido a App-Facturas" });
  } catch (error) {
    handleError(res, error, "Error");
  }
});

// Obtener todas las facturas
router.get('/leer', async (req, res) => {
  try {
    const query = "SELECT * FROM facturas";
    conexionMysql.query(query, (error, results) => {
      if (error) {
        handleError(res, error, "Error al obtener las facturas");
      } else {
        res.status(200).json({
          "resultado": results,
        });
      }
    });
  } catch (error) {
    handleError(res, error, "Error al obtener las facturas");
  }
});
    
 
// Eliminar una factura existente
router.delete('/:id', async (req, res) => {
  try {
    const facturaId = req.params.id;
    const query = "DELETE FROM facturas WHERE id = ?";
    conexionMysql.query(uery, [facturaId], (error, results) => {
      if (error) {
        handleError(res, error, "Error al borrar la factura");
      } else {
        res.json({ mensaje: "Factura borrada correctamente" });
      }
    });
  } catch (error) {
    handleError(res, error, "Error al borrar la factura");
  }
    
});


// Actualizar una factura existente
router.put('/:id', (req, res) => {
  const facturaId = req.params.id;
  const facturaActualizar = req.body;
  const query = "UPDATE facturas SET Servicio=?, Cantidad=?, Precio=?, Impuesto=?, Fecha_factura=?, Referencia_pago=?, Fecha_vencimiento=?, Total=? WHERE id=?";
    
    conexionMysql.query(query, [
        facturaActualizar.Servicio,
        facturaActualizar.Cantidad,
        facturaActualizar.Precio,
        facturaActualizar.Impuesto,
        facturaActualizar.Fecha_factura,
        facturaActualizar.Referencia_pago,
        facturaActualizar.Fecha_vencimiento,
        facturaActualizar.Total,
        facturaId], 
        (error, result) => {
        if (error) {
            handleError(res, error, "Error al actualizar la factura");
           
            return res.status(500).json({ error: "Error al actualizar la factura" });
        } else {
          if (result.affectedRows === 0) {
            return res.status(404).json({ error: `Factura con ID ${facturaId} no encontrada` });
        }
        res.status(200).json({
            mensaje: `Factura con ID ${facturaId} actualizada correctamente`
        });
      } 
    });
  });



module.exports = router;
