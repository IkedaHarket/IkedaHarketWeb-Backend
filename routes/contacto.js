const {Router} = require('express');
const { check } = require('express-validator');
const { enviarCorreo } = require('../controllers/contacto');

const {validarCampos} = require('../middlewares/validarCampos');

const router = new Router();


router.post('/',[
    check('asunto','El asunto es obligatorio').not().isEmpty(),
    check('mensaje','El mensaje es obligatorio').not().isEmpty(),
    validarCampos
],enviarCorreo)

module.exports = router;