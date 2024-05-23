const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getEnsembles);
router.get('/:id', controller.getEnsembleById)

module.exports = router;