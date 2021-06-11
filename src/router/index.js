const { Router } = require('express');
const router = Router();

const { getPre, getUsers, postDatos } = require('../controller/index.controller')

router.get('/users', getUsers);
router.get('/pre', getPre);
router.post('/users', postDatos);

module.exports = router;