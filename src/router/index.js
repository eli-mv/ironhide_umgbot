const { Router } = require('express');
const router = Router();

const { updateResult, getResultmes, getPre, getUsers, postDatos } = require('../controller/index.controller')

router.get('/users', getUsers);
router.get('/pre', getPre);
router.post('/users', postDatos);
router.get('/mes/:mes', getResultmes);
router.put('/update/:mes', updateResult);

module.exports = router;