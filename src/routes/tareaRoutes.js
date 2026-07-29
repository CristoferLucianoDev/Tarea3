const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

router.post('/', tareaController.crear);
router.get('/', tareaController.listar);
router.get('/:id', tareaController.obtenerPorId);
router.put('/:id', tareaController.actualizar);
router.delete('/:id', tareaController.eliminar);

module.exports = router;