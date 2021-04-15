const {Router} = require('express');
const { check } = require('express-validator');

const { login,revalidarToken } = require('../controllers/auth');
const {validarCampos} = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');

const router = new Router();


router.post('/login',[
    check('correo','El correo no es valido').isEmail(),
    check('correo','El correo es obligatorio').not().isEmpty(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    check('password','El password debe ser de mas de 6 caracteres').isLength({min:6}),
    validarCampos
],login)

router.get('/renew',
    validarJWT,
    validarCampos
,revalidarToken)

module.exports = router;
