const {Router} = require('express');
const { check } = require('express-validator');
const { enviarCorreo } = require('../controllers/contacto');

const {validarCampos} = require('../middlewares/validarCampos');

const router = new Router();


router.post('/',[
    check('correo','El correo es obligatorio').not().isEmpty(),
    check('correo','El correo no es valido').isEmail(),
    check('mensaje','El mensaje es obligatorio').not().isEmpty(),
    validarCampos
],enviarCorreo)

module.exports = router;