const express = require('express');
const router = express.Router();
const facturasController = require('../controllers/facturas.controller');

router.get('/', facturasController.getAllFacturas);
router.get('/:id', facturasController.getFacturaById);
router.post('/', facturasController.createFactura);
router.put('/:id', facturasController.updateFactura);
router.delete('/:id', facturasController.deleteFactura);

module.exports = router;
