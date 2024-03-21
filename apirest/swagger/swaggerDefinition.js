const swaggerDefinition = {
    openapi: "3.1.0",
    info: {
      title: "Administrador de Facturas",
      version: "1.0.0",
      description: "'Gestión de facturas. Almacenaje de facturas a traves de una api hacia una base de datos SQL"
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local de desarrollo"
      }
    ],
        paths: {
          "/saludo": {
            get: {
              summary: "Saludar al mundo",
              description: "Endpoint para saludar al mundo.",
              responses: {
                "200": {
                  description: "Saludo exitoso",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          Saludo: { type: "string" }
                        }
                      }
                    }
                  },
                },
                "default": {
                  description: "Error al saludar al mundo",
                  content: {
                    "application/json": {
                      schema: {
                        $ref: "#/components/schemas/Error"
                      }
                    }
                  }
                }
              }
            }
        },
        "/insert": {
          post: {
            summary: "Insertar una nueva factura en la base de datos",
            description: "Inserta una nueva factura con los datos proporcionados en el cuerpo de la solicitud",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      servicios: { type: "string" },
                      cantidad: { type: "integer" },
                      precio: { type: "number" },
                      impuesto: { type: "number" },
                      fecha_factura: { type: "string", format: "date" },
                      referencia_pago: { type: "string" },
                      fecha_vencimiento: { type: "string", format: "date" },
                      total: { type: "number" }
                    }
                  }
                }
              }
            },
            responses: {
              "201": {
                description: "Datos insertados correctamente"
              },
              "500": {
                description: "Error al insertar la factura",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Error"
                    }
                  }
                }
              }
            }
          }
        }
      },
        components: {
          schemas: {
            Error: {
              type: "object",
              properties: {
                status: { type: "integer" },
                message: { type: "string" }
              }
            }
          }
        }
      };
/**
 * @swagger
 * /api/v1/insert:
 *   post:
 *     summary: Insertar una nueva factura en la base de datos.
 *     description: Inserta una nueva factura con los datos proporcionados en el cuerpo de la solicitud.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               servicio:
 *                 type: string
 *               cantidad:
 *                 type: integer
 *               precio:
 *                 type: number
 *               impuesto:
 *                 type: number
 *               fecha_factura:
 *                 type: string
 *                 format: date
 *               referencia_pago:
 *                 type: string
 *               fecha_vencimiento:
 *                 type: string
 *                 format: date
 *               total:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Datos insertados correctamente.
 *       '500':
 *         description: Error al insertar la factura.
 */

// Ruta para insertar una factura
// // // /**
// // //  * @swagger
// // //  * /insert:
// // //  *   post:
// // //  *     summary: insertar una factura en la base de datos.
// // //  *     description: a través de nuestra api, insertar una factura en la tabla de tareas.
// // //  *     parameters:
// // //  *     - in: body
// // //  *         name: servicio
// // //  *         required: true
// // //  *         description: descripcion del servicio que desea insertar en la base de datos.
// // //  *         schema:
// // //  *           type: string
// // //  *           example: limpieza a fondo
// // //  *     - in: body
// // //  *         name: cantidad
// // //  *         required: true
// // //  *         description: cuantos servicios son en total.
// // //  *         schema:
// // //  *           type: int
// // //  *           example: 100.00
// // //  *     - in: body
// // //  *         name: precio
// // //  *         required: true
// // //  *         description: coste de lo que cuesta el servicio
// // //  *         schema:
// // //  *           type:  decimal()
// // //  *           example: 100.00
// // //  *     - in: body
// // //  *         name: impuesto
// // //  *         required: true
// // //  *         description: impuesto de retencion irpf iva%
// // //  *         schema:
// // //  *           type: int
// // //  *           example: 21%
// // //  *     - in: body
// // //  *         name: fecha_factura
// // //  *         required: true
// // //  *         description: fecha de creación de la factura en formato yyyy-mm-dd.
// // //  *         schema:
// // //  *           type: string
// // //  *           format: date
// // //  *           example: 2024-01-01
// // //  *     - in: body
// // //  *         name: referencia_pago
// // //  *         required: true
// // //  *         description:  descripcion de si el pago es a cuenta, espcificar cuenta bancaria o cualquier otra referencia
// // //  *         schema:
// // //  *           type: string
// // //  *           example: cuenta bancaria es79 0987 1234 5678 1234
// // //  *     - in: body
// // //  *         name: fecha_vencimiento
// // //  *         required: true
// // //  *         description: fecha en que va a vencer la factura en formato yyyy-mm-dd.
// // //  *         schema:
// // //  *           type: string
// // //  *           format: date
// // //  *           example: 2024-01-01
// // //  *     - in: body
// // //  *         name: total
// // //  *         required: true
// // //  *         description: valor total con impuesto incluidos
// // //  *         schema:
// // //  *           type: string
// // //  *           format: decimal()
// // //  *           example: 120, 12
// // //  *     responses:
// // //  *       200:
// // //  *         description: factura introducida correctamente.
// // //  *       400:
// // //  *         description: error de ruta.
// // //  *         content:
// // //  *           application/json:
// // //  *             schema:
// // //  *               type: object
// // //  *               properties:
// // //  *                 error:
// // //  *                   type: string
// // //  *                   description: mensaje de error.
// // //  *       500:
// // //  *         description: error del servidor.
// // //  *         content:
// // //  *           application/json:
// // //  *             schema:
// // //  *               type: object
// // //  *               properties:
// // //  *                 error:
// // //  *                   type: string
// // //  *                   description: mensaje de error.
// // //  */


module.exports = swaggerDefinition;