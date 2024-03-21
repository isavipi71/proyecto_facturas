const express = require("express");
const router = express.Router();
const cors = require("cors");
const mysql = require("mysql2");
const conexionMysql = require("./conexion");

// Utilidades
router.use(cors());
router.use(express.json());

//Error handler
const handleError = (res, error, mensaje) => {
  console.error(error);
  res.status(500).json({
    status: 500,
    message: `${mensaje}. ${error}`,
  });
};


router.get("/saludo", async (req, res) => {
  try {
    res.status(200).json({ Saludo: "Hola Mundo!" });
  } catch (error) {
    handleError(res, error, "Error");
  }
});




router.post("/insert", async (req, res) => {
  try {
    const factura = req.body;
    const query = "INSERT INTO facturas VALUES (default,?,?,?,?,?,?,?,?)";
    conexionMysql.query(query, [factura.servicios, factura.cantidad, factura.precio, factura.impuesto, factura.fecha_factura, factura.referencia_pago, factura.fecha_vencimiento, factura.total], (error, result) => {
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





module.exports = router;