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
    conexionMysql.query(query, [factura.Servicio, factura.Cantidad, factura.Precio, factura.Impuesto, factura.Fecha_factura, factura.Referencia_pago, factura.Fecha_vencimiento, factura.Total], (error, result) => {
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

router.get("/read", async (req, res) => {
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


router.delete("/:id", async (req, res) => {
  try {
    const facturaId = req.params.id;
    const query = "DELETE FROM facturas WHERE id = ?";
    conexionMysql.query(query, [facturaId], (error, results) => {
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

router.put("/editar", async (req, res) => {

    const servicio = req.body.Servicio;
    const cantidad = req.body.Cantidad;
    const precio = req.body.Precio;
    const impuesto = req.body.Impuesto;
    const fecha_factura = req.body.Fecha_factura;
    const referencia_pago = req.body.Referencia_pago;
    const fecha_vencimiento = req.body.Fecha_vencimiento;
    const total = req.body.Total;
    const id = req.params.id;

    const query = "update facturas set servicio = ?, cantidad = ?, precio = ?, impuesto=?, fecha_factura = ?, referencia_pago = ?, fecha_vencimiento = ?, total =? where id = ?";
    conexionMysql.query(query, [servicio, cantidad, precio, impuesto, fecha_factura, referencia_pago, fecha_vencimiento, total], error => {
      if (error) {
        handleError(res, error, "Error al actualizar la factura");
      } else {
        res.status(200).json({
          "mensaje": "<span> Dato editado correctamente! <i class='fas fa-spinner fa-spin'></i></span>"  
    });
  }
});
});




    module.exports = router;