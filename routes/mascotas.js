var router = require('express').Router()

var {
	crearMascota,
	obtenerMascota,
	modificarMascota,
	eliminarMascota,
	count
} = require('../controllers/mascotas');

router.get('/', obtenerMascota);
router.get('/count/:cat', count);
router.get('/:id', obtenerMascota);
router.post('/', crearMascota);
router.put('/:id', modificarMascota);
router.delete('/:id', eliminarMascota);

module.exports = router;
