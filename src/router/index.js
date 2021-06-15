const { Router } = require('express');
const router = Router();

const { updateResult, getResultmes, getPre, getPtotal, postDatos } = require('../controller/index.controller')

router.get('/ptotal', getPtotal);
router.get('/pre', getPre);
router.post('/ptotal', postDatos);
router.get('/mes/:mes', getResultmes);
router.put('/update/:mes', updateResult);

module.exports = router;